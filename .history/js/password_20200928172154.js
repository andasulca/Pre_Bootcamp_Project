$(document).ready(function () {
    // Configure MinSize -- default is 5
    PasswordValidator.minSize = 7;
    // Configure MaxSize -- default is 15
    PasswordValidator.maxSize = 16;

    // whether you want to validate on prohibited characters    
    //PasswordValidator.prohibitedConfigured = false;

    PasswordValidator.setup('password1','verify1');
});