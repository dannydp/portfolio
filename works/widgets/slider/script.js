(function() {
	function Slider(node, sladeImages) {
		this.$node = $(node);
		this.images = sladeImages;
		this.createHTML(this.images, this.$node);
		this.$slidesContainer = this.$node.find('.slides-holder');
		this.$slides = this.$slidesContainer.find('li');
		this.currentIndex = 0;
		this.bindEvents();
		this.startSlider();
	}


	Slider.prototype.createHTML = function(images, $targetNode) {

		var $buttonsHolder = $('<ul class = "control-buttons">');
		this.$buttonBack = $('<li class="back"></li>');
		this.$buttonForward = $('<li class="forward"></li>');
		var $slidesContainer = $('<ul class="slides-holder">');
		var $slidesContainerWrapper = $('<div class="wrapper">');
		var $root = $('<div class="slider">');

		$buttonsHolder.append(this.$buttonBack);
		$buttonsHolder.append(this.$buttonForward);
		$slidesContainerWrapper.append($slidesContainer);
		$root.append($slidesContainerWrapper);
		$root.append($buttonsHolder);

		images.forEach(function(imgSrc, index) {
			index = index + 1;
			var $slide = $('<li><img src = "img/' + imgSrc + '"></li>');
			$slidesContainer.append($slide);

		});
		$targetNode.append($root);

	};

	Slider.prototype.bindEvents = function() {
		var _this = this;
		this.$buttonForward.on('click', function(event) {
			_this.nextSlide();
			_this.waitSlide();
		});
		this.$buttonBack.on('click', function(event) {
			_this.prevSlide();
			_this.waitSlide();
		});
	};

	Slider.prototype.slideTo = function(index) {
		this.currentIndex = index;

		var scrollTo = [].reduce.call(this.$slides, function(to, slide, slideIndex, allSlides) {
			if (slideIndex && slideIndex <= index) {
				to += $(allSlides[slideIndex - 1]).width();
			}
			return to;
		}, 0);

		this.$slidesContainer.stop().animate({
			right: scrollTo + 'px'
		});
	};

	Slider.prototype.nextSlide = function() {
		if (this.currentIndex < this.images.length - 1) {
			this.slideTo(this.currentIndex + 1);
		} else {
			this.slideTo(0);
		}
	};

	Slider.prototype.prevSlide = function() {
		if (this.currentIndex > 0) {
			this.slideTo(this.currentIndex - 1);
		} else {
			this.slideTo(this.images.length - 1);
		}
	};
	Slider.prototype.startSlider = function() {
		this.scrollInterval = setInterval(this.nextSlide.bind(this), 3000);
	};

	Slider.prototype.waitSlide = function() {
		clearTimeout(this.waitSliderTimeout);
		clearInterval(this.scrollInterval);
		this.waitSliderTimeout = setTimeout(this.startSlider.bind(this), 2000);
	};

	window.Slider = Slider;
}());
$(function() {
	new Slider(document.body, ['1.jpg', '2.jpg', '3.jpg', '4.jpg']);
});