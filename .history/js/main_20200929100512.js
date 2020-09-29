$('.small-image').hover(function() {
    var imageSrc = $(this).attr('src');
    $('#main-image').attr('src', imageSrc);
});

$('#registerForm').submit(function() {
    $('.error-msg').hide();
    var isValid = true;

    if ($('#username').val() == '') {
        $('#msgUsernameEmpty').show();
        isValid = false;
    }

    if ($('#password').val() == '') {
        $('#msgPassword').show();
        isValid = false;
    }
})