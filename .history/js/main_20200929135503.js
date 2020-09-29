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
    var username = $('#chat-username').val();
    $('#chat-content').append('<div><p>' + username + '</p></div>');

    var message = $('#chat-message').val();
    $('#chat-content').append('<div class="border-bottom"><p>' + message + '</p></div>');

    $('#chat-username').val('');
    $('#chat-message').val('');
    return false;
})