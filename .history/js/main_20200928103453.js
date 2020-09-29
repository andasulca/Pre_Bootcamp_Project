$('.small-image').hover(function() {
    var imageSrc = $(this).attr('src');
    $('#main-image').attr('src', imageSrc);
});


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});