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
    if (!/([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/.test($('#password').val())) {
        $('#msg-password-char').show();
        isValid = false;
    }
    if ($('#password').val().length < 8 || $('#password').val().length > 30) {
        $('#msg-password-short').show();
        isValid = false;
    }
    if (!/[A-Z]+/.test($("#password").val())) {
        $('#msg-password-capital').show();
        isValid = false;
    }
    if (!/([0-9])/.test($('#password').val())) {
        $('#msg-password-numb').show();
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

$('.small-img').hover(function() {
    var imageSrc = $(this).attr('src');
    $('#main-image').attr('src', imageSrc);
});


$('#chat-form').submit(function() {
    var date = new Date();

    var strDate = date.toString().slice(4, 24);

    var username = $('#chat-username').val();
    $('#chat-content').append('<p>' + '<span class="font-weight-bold">' + username + '</span>' + ' ' + '<span class="text-muted">' + strDate + '</span>' + '</p>');

    var message = $('#chat-message').val();
    $('#chat-content').append('<p class="border-bottom">' + message + '</p>');

    $('#chat-username').val('');
    $('#chat-message').val('');
    return false;
})

function hideParagraph() {
    document.getElementById("hideParagraph").style.visibility = "hidden";
}
