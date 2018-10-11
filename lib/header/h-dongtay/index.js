function CCHeader12() {
	$('.dongtay-header #demoResAllInOneMenu').kResponsiveMenu({
		animationSpeed: 'fast', // slow, fast, 200
		resizeWidth: 975, // 'xs', 'sm', 'md', 'lg', 'xl', 480,
		menuType: 'horizontal', // horizontal, vertical
		menuPush: 'right', // right, left
		menuPushPosition: 'fixed', // absolute
		menuPushWidth: '310', // px, %, rem
		menuBackDrop: true, // px, %, rem
	})
};


$(document).ready(function () {
	CCHeader12()
});
// Fixed Header
$(window).scroll(function () {
});

$(window).resize(function () {
})
