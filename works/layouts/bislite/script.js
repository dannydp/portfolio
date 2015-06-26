(function() {
	//SliderJS
	function Slider(node, sladeImages) {
		this.$node = $(node);
		this.images = sladeImages;
		this.$buttonBack = $('.back');
		this.$buttonForward = $('.forward');
		this.buildHTML(this.images, this.$node);
		this.$slidesContainer = this.$node.find('.slides-holder');
		this.$slides = this.$slidesContainer.find('li');
		this.bindEvents();
		this.currentIndex = 0;
	}

	Slider.prototype.buildHTML = function(images, $targetNode) {
		var $slidesHolder = $('<ul class="slides-holder">');
		var $sliderWrapper = $('<div class="wrapperJS">');
		var $root = $('.sliderJS');

		$sliderWrapper.append($slidesHolder);
		$root.append($sliderWrapper);

		images.forEach(function(imgSrc, index) { //add an image
			index = index + 1;
			var $slide = $('<li><img src = "imgs/works/' + imgSrc + '"></li>');
			$slidesHolder.append($slide);
		});
		$targetNode.append($root);
	};
	Slider.prototype.bindEvents = function() {
		var _this = this;
		this.$buttonForward.on('click', function(event) {
			_this.nextSlide();
		});
		this.$buttonBack.on('click', function(event) {
			_this.prevSlide();
		});
	};
	Slider.prototype.slideTo = function(index) {
		this.currentIndex = index;

		var scrollTo = [].reduce.call(this.$slides, function(to, slide, slideIndex, allSlides) {
			if (slideIndex && slideIndex <= index) {
				to += $(allSlides[slideIndex - 1]).width(); //determine length of the image
			}
			return to;
		}, 0);
		//Shifts the image on the length
		this.$slidesContainer.stop().animate({
			right: scrollTo + 'px'
		});
	};
	Slider.prototype.nextSlide = function() {
		if (this.currentIndex < 5) {
			this.slideTo(this.currentIndex + 1);
		} else {
			this.slideTo(0);
		}
	};
	Slider.prototype.prevSlide = function() {
		if (this.currentIndex > 0) {
			this.slideTo(this.currentIndex - 1);
		} else {
			this.slideTo(5);
		}
	};

	$(document).ready(function() {

		new Slider($('.sliderJS'), ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']);

		var $serviceNode = $('.service');
		var $portfolioNode = $('.portfolio');
		var $serviceLinks = $('.service > a');
		var $portfolioLinks = $('.portfolio > a');

		function showHide(eventNode, node, linksColor) {
			eventNode.click(function() {
				if (node.css('display') !== 'block') {
					eventNode.addClass('open-submenu');
					node.css('display', 'block');
					linksColor.css('color', '#2aacc8');
				}
			});
			eventNode.mouseleave(function() {
				setTimeout(function() {
					node.css('display', 'none');
					eventNode.removeClass('open-submenu');
					linksColor.css('color', '#010101');
				}, 200);
			});
		}
		showHide($serviceNode, $('.service > ul'), $serviceLinks);
		showHide($portfolioNode, $('.portfolio > ul'), $portfolioLinks);
	});
}());