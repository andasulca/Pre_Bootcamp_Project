$('.small-image').hover(function() {
    var imageSrc = $(this).attr('src');
    $('#main-image').attr('src', imageSrc);
});

$('#register-form').submit(function() {
    $('.error-msg').hide();
    var isValid = true;

    if ($('#username').val() == '') {
        $('#msgUsername').show();
        isValid = false;
    }

    if ($('#username').val() == '') {
        $('#msgUsername').show();
        isValid = false;
    }
})