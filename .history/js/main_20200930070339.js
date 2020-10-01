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
    if ($('#confirm-password').val() == '') {
        $('#msg-match-empty').show();
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
    $('#chat-content').append('<p>' + '<span class="font-weight-bold">' + username + '</span>' + ' ' + '<span class="text-muted">' + formattedDate + '</span>' + '</p>');

    var message = $('#chat-message').val();
    $('#chat-content').append('<p class="border-bottom">' + message + '</p>');

    $('#chat-username').val('');
    $('#chat-message').val('');
    return false;
})

var date = new Date();

var formattedDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
