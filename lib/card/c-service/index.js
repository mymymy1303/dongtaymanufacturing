$(document).ready(function () {
	const breadcrumb_title = $('.canhcam-breadcrumb-1 .main-breadcrumb .breadcrumb li:last a span').text();
	$('#we-title').text(breadcrumb_title);

	const services_side_box = $('.huy-services .canhcam-card-service .side-panel');

	const services_cards_height = $('.huy-services .canhcam-card-service .col-xl-9').innerHeight();

	services_side_box.css('height', services_cards_height)
});