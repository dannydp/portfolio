(function() {
    /*
     *argument: {node} node to which we are add columns;
     */
    function createHTML(node) {
        createColumnHTML($('.main'), 'features', 3);
        createColumnHTML($('.main'), 'single-license', 3);
        createColumnHTML($('.main'), 'extended-license', 3);
        createColumnHTML($('.main'), 'membership', 3);
        addContent($('.features > li'), '', '<p class= "title-text">features</p>', '<p class = "text">Who wouldn`t Want These Awesome Stuffs!</p>');
        addContent($('.single-license > li'), '<p class= "title-text">single-license</p><p class = "main-text">Greate for individuals</p>', '<p class = "price-text">free</p>', '<p class = "text"> Tou Literally Have Acces To Everything!</p>');
        addContent($('.extended-license > li'), '<p class= "title-text">extended license</p><p class = "main-text">Greate for small business</p>', '<p class = "price-text">$195</p>', '<p class = "text">Unlimited Telephonic Support</p>');
        addContent($('.membership > li'), '<p class= "title-text">membership</p><p class = "main-text">Greate for all business</p>', '<p class = "price-text">$245</p>', '<p class = "text">You Literally Have Access To Everything!</p>');
        bindEvent($('.main > ul'));
        addStyle();
    }

    //build html columns
    function createColumnHTML(node, listClass, cellNumber) {
        var list = $('<ul class = "' + listClass + '">');
        var arr = ['']; //create an empty array to use the method .forEach
        var cell;
        arr.length = cellNumber;
        arr.forEach(function(el, index) {
            while (index <= arr.length) {
                cell = $('<li></li>'); //each iteration create 'li'
                list.append(cell);
                index = index + 1;
            }
        });
        node.append(list);
    }

    /*
     *add content to the column
     *arguments: {$node} node to which you are add content;
     *           {title} the text of the first "li";
     *           {price} the text of the second "li";
     *           {mainText} the text of the third  "li";
     */
    function addContent($node, title, price, mainText) {
        $node.eq(0).html(title);
        $node.eq(1).html(price);
        $node.eq(2).html(mainText);
        $node.eq(2).css({
            'width': '230px',
            'height': '90px'
        });
        $node.eq(3).css({
            'width': '230px',
            'height': '268px',
            'margin-bottom': '50px'
        });

        createColumnHTML($node.eq(3), 'bottom-list', 3); //create a list in the third "li"
        addContentToBottomList($('.bottom-list > li'));
        var $buttonLink = $('<div class ="sign-up"><a href = "#"">sign up</a><div id="circle"></div></div>'); //create a button "SIGN UP"
        $('.bottom-list', $node).after($buttonLink);
    }

    function addContentToBottomList($node) {
            $node.each(function() {
                $node.html('<div id="chekmark"></div><p class = "main-text">Lorem Ipsum</p>');
            });
        }
        //add CSS style to the column
    function addStyle() {
            $('.features > li').eq(1).css('border-radius', '3px 3px 0 0');
            $('.features > li').eq(2).css('background-color', '#010101');
            $('.single-license  > li').eq(2).css({
                background: 'url(\'img/sprites.png\')',
                'background-position': '-66px -210px'
            });
            $('.extended-license > li').eq(2).css({
                background: 'url(\'img/sprites.png\')',
                'background-position': '-85px -15px'
            });
            $('.membership  > li').eq(2).css({
                background: 'url(\'img/sprites.png\')',
                'background-position': '-564px -190px'
            });
        }
        //add an event '.hover' to the column
    function bindEvent($node) {
        $node.hover(function() {
            $('li', this).eq(0).css({
                'opacity': 1,
                'border-radius': 0
            });
            $('li', this).eq(2).css({
                'background-blend-mode': 'luminosity', //IE doesn't work
                'background-color': '#f0a001'
            });
            $('.sign-up', this).css('background-color', '#f0a001');
        }, function() {
            $('li', this).eq(0).css({
                'opacity': 0.8,
                'border-radius': '3px 3px 0 0'
            });
            $('li', this).eq(2).css({
                'background-blend-mode': 'Normal', //IE doesn't work
                'background-color': 'transparent'
            });
            $('.sign-up', this).css('background-color', '#52be8b');
            $('li', '.features').eq(2).css('background-color', '#010101');
        });
    }
    window.createHTML = createHTML; //take out a variable to a global level visibility

    $(document).ready(function() {
        createHTML($('body'));
    });
})();