(function() {

	function Lightbox(node, smallImg) {
		this.$node = $(node);
		this.smallImage = smallImg;
		this.buildHtml(this.$node, this.smallImage);
	}

	Lightbox.prototype.buildHtml = function($targetNode, images) {
		var $smallImgContainer = $('<ul class = "small-img">');
		var $largerImgContainer = $('<ul class = "wrapper">');
		images.forEach(function(imgSrc, index) {
			var $slide = $('<li class="animated flipInY"><img src = "img/small/' + imgSrc + '"></li>');
			//when we click on the small image is built node larger image
			$slide.on('click', function() {
				$('.wrapper li').remove(); //remove the previous largeImgNode, if it was
				var $blur = $('<div class="blur"></div>'); //add block to dim the background
				var $largeImgNode = $('<li class = "animated fadeIn"><img id = "large-img" src = "img/larger/' + imgSrc + '"></li>');
				var $closeImgNode = $('<img class = "close-button" src = "img/close.png">'); // close button
				$largeImgNode.append($closeImgNode);
				$largerImgContainer.append($largeImgNode);
				$('body').append($blur);
				//when we click on .blure or close button, large image is removed
				closeLargeImg($blur);
				closeLargeImg($closeImgNode);
			});
			$smallImgContainer.append($slide);
		});
		$targetNode.append($smallImgContainer);
		$targetNode.append($largerImgContainer);

	};

	function closeLargeImg($node) {
		$node.on('click', function() {
			$('.wrapper li').remove();
			$('.blur').remove();
		});
		$node.on('click', function() {
			$('.wrapper li').remove();
			$('.blur').remove();
		});
	}
	window.Lightbox = Lightbox;
	$(document).ready(function() {
		new Lightbox(document.body, ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg', '7.jpg']);
	});
})();