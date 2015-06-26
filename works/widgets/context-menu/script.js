'use strict';

(function() {
	var HAS_SUBMENU_CLASS = 'context-menu-has-submenu';

	function topWalker(node,testFunk,lastParent) {
		while(node && node !== lastParent) {
			if(testFunk(node)) {
				return node;
			}
			node = node.parentNode;
		}
	}
	function ContextMenu(node, menuStructure) {
		this.root = node;
		this.menu = this._buildMenu(menuStructure);
		this._initSubmenuBehaviour();
		document.body.appendChild(this.menu);
		this.root.addEventListener('contextmenu', this._onRootContextMenu.bind(this), false);
		document.documentElement.addEventListener('click', this._onGlobalClick.bind(this), false);
	}

	ContextMenu.prototype._buildMenu = function(structure) {
		var root = document.createElement('ul');
		var menuItem;
		var menuArrow;
		root.className = 'context-menu';
		for (var i = 0; i < structure.length; i += 1) {
			menuItem = document.createElement('li');
			menuItem.innerText = structure[i].title;
			if (structure[i].submenu) {
				menuArrow = document.createElement('span');
				menuArrow.innerText = '►';
				menuItem.className = HAS_SUBMENU_CLASS;
				menuItem.appendChild(this._buildMenu(structure[i].submenu));
				menuItem.appendChild(menuArrow);
			} else {
				menuItem.addEventListener('click', structure[i].action, false);
			}
			root.appendChild(menuItem);
		}
		return root;
	};
	ContextMenu.prototype._onGlobalClick = function (event) {
		var menu = this.menu;
		if(!topWalker(event.target,function (node) {
			return menu === node;
		})) {
			this.hide();
		}
	};

	ContextMenu.prototype._initSubmenuBehaviour = function () {
		var submenuHolders = this.menu.querySelectorAll('.' + HAS_SUBMENU_CLASS);
		Array.prototype.forEach.call(submenuHolders, function (submenuHolder) {
			var subMenuNode = submenuHolder.querySelector('ul');
			submenuHolder.addEventListener('mouseenter', function() {
				subMenuNode.style.display = 'block';
			});
			submenuHolder.addEventListener('mouseleave', function() {
				subMenuNode.style.display = 'none';
			});
		});
	};
	ContextMenu.prototype._onRootContextMenu = function (event) {
		event.preventDefault();
		var x = event.pageX;
		var y = event.pageY;
		this.show(x,y);
	};
	ContextMenu.prototype.show = function(left, top) {
		this.menu.style.display = 'block';
		this.menu.style.left = left + 'px';
		this.menu.style.top = top + 'px';
	};
	ContextMenu.prototype.hide = function() {
		this.menu.style.display = 'none';
	};
	window.ContextMenu = ContextMenu;
}());