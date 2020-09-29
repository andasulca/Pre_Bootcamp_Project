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
        $('#msgPasswordEmpty').show();
        isValid = false;
    }

    if ($('#password').val() != $('#confirmPassword').val()) {
        $('#msgMatch').show();
        isValid = false;
    }

    if ($('#firstName').val() == '') {
        $('#msgNameEmpty').show();
        isValid = false;
    }

    if ($('#selectCountry').val() == 'Country*') {
        $('#msgCountry').show();
        isValid = false;
    }

    return isValid;
});