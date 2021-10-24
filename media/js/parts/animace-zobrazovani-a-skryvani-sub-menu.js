$('#menu-1').smartmenus({
    showFunction: null,
    showDuration: 1000
});
$('#menu-2').smartmenus({
    showFunction: function($ul, complete) {
        $ul.fadeIn(1000, complete);
    }
});
$('#menu-3').smartmenus({
    hideFunction: null,
    hideDuration: 1000
});
$('#menu-4').smartmenus({
    hideFunction: function($ul, complete) {
        $ul.fadeOut(1000, complete);
    }
});
$('#menu-5').smartmenus({
    collapsibleShowFunction: null,
    collapsibleShowDuration: 1000
});
$('#menu-6').smartmenus({
    collapsibleShowFunction: function($ul, complete) {
        $ul.slideDown(1000, complete);
    }
});
$('#menu-7').smartmenus({
    collapsibleBehavior: 'toggle',
    collapsibleHideFunction: null,
    collapsibleHideDuration: 1000
});
$('#menu-8').smartmenus({
    collapsibleBehavior: 'toggle',
    collapsibleHideFunction: function($ul, complete) {
        $ul.slideUp(1000, complete);
    }
});