$('.small-image').hover(function() {
    var imageSrc = $(this).attr('src');
    $('#main-image').attr('src', imageSrc);
});

$('#register-form').submit(function() {
    $('.error-msg').hide();
    var isValid = true;
    if ($('#register-username').val() == '') {
        $('#msg-username-empty').show();
        isValid = false;
    }
    if ($('#password').val() == '') {
        $('#msg-password-empty').show();
        isValid = false;
    }
    if ($('#password').val() != $('#confirm-password').val()) {
        $('#msg-match').show();
        isValid = false;
    }
    if ($('#first-name').val() == '') {
        $('#msg-name-empty').show();
        isValid = false;
    }
    if ($('#select-country').val() == 'Country*') {
        $('#msg-country').show();
        isValid = false;
    }
    if (!$('#check-box').prop('checked')) {
        $('#msg-terms').show();
        isValid = false;
    }
    return isValid;
});

$('#chat-form').submit(function() {
    var message = $('#chat-message').val();
    $('#chat-content').append('<p>' + message + '</p>');

    var message = $('#chat-message').val();
    $('#chat-content').append('<p>' + message + '</p>');

    $('#chat-message').val('');
    return false;
})