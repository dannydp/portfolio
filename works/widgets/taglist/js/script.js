(function() {
	function tagList(node) {
		buildTagListHTML(node);
		var $tags = []; // an empty array, which will add tags
		var $btn = $('form > a');
		var $closeBtn;
		var $startCorectionTagList;
		var $stopCorectionTagList;
		$('form').on('submit', showTagCloud);
		$btn.on('click', showTagCloud);
		$stopEditingTagList.on('click', stopEditing);
		$continueEditingTagList.on('click', continueEditing);
		/*
			*create a tagListHTML
			*argument: node to which will be added to the tagList
		*/
		function buildTagListHTML($targetNode) {
			
			var $tagListHTML = $('<div class="container"><div class="taglist"><form class="form"><input type="text" class="form-control" placeholder="Тег"><a href = "#" class="btn btn-info">Добавть</a></form></div></div>');
			//create a buttons that can be edited tagList
			$continueEditingTagList = $('<a href = "#" class = "start-link btn btn-link btn-lg">Редактировать теги</a>');
			$stopEditingTagList = $('<a href = "#" class = "btn btn-link btn-lg">Завершить редактирование</a>');
			$tagListHTML.prepend($stopEditingTagList);
			$tagListHTML.prepend($continueEditingTagList);
			node.append($tagListHTML);
		}

		function showTagCloud() {
			var $value = $('input').val();
			var $tagCloud;
			if ($tags.length < 1) {
				$tags.push($value);
				$tagCloud = $('<div class="tags btn-group"><a href = "#" class = "btn btn-default btn-xs">' + $tags[0] + '</a><a href = "#" class = "btn closeTag btn-default btn-xs"><span class = "glyphicon glyphicon-remove"></span></a></div>');
			} else {
				for (var i = 0; i < $tags.length; i += 1) {
					var $tagText = $tags[i];
					if ($tags.indexOf($value) == -1) {
						$tags.push($value);
						$tagCloud = $('<div class="tags btn-group"><a href = "#" class = "btn btn-default btn-xs">' + $tags[$tags.length - 1] + '</a><a href = "#" class = "btn closeTag btn-default btn-xs"><span class = "glyphicon glyphicon-remove"></span></a></div>');
					} else {
						break;
					}
				}
			}
			$('input').val('');
			$('.taglist').prepend($tagCloud);
			deleteTagCloud();
		}

		function deleteTagCloud() {
			$closeBtn = $('.closeTag');
			$closeBtn.on('click', function() {
				$(this).parent().remove();
			});
		}
		//stop editing tagList 
		function stopEditing() {
			$btn.css('display', 'none');
			$('.form-control').css('display', 'none');
			$stopEditingTagList.css('display', 'none');
			$continueEditingTagList.css('display', 'inline-block');
			$closeBtn.css('display', 'none');
		}
		//continue editing tagList 
		function continueEditing() {
			$btn.css('display', 'inline-block');
			$('.form-control').css('display', 'inline-block');
			$stopEditingTagList.css('display', 'inline-block');
			$continueEditingTagList.css('display', 'none');
			$closeBtn.css('display', 'block');
		}
	}

	window.tagList = tagList;//add variable to the global scope
})();

$(document).ready(function() {
	tagList($('body'));
});