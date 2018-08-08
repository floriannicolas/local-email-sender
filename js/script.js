$(document).ready(function(){
    // App loader
    setTimeout(function(){
        $('.app-loader').addClass('disabled');
        setTimeout(function(){
            $('.app-loader').remove();
        }, 1000);
    }, 300);

    // Validate email function
    // From : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $('#form-send-email').submit(function(){
        if(!$('#submit-button').hasClass('loading')) {
            // Reset errors
            $('.error-message').text('');
            $('.content-input .error').remove();
            $('.error-input').removeClass('error-input');
            $(this).find("textarea[name=body]").attr('placeholder', '');
            var send = true;

            var to = $(this).find("input[name=to]").val();
            if(!to || !validateEmail(to)){
                send = false;
                $(this).find("input[name=to]").parent().addClass('error-input').append('<div class="error">Please enter a valid email</div>');
            }
            var subject = $(this).find("input[name=subject]").val();
            var body = $(this).find("textarea[name=body]").val();
            if(!body || body === ''){
                send = false;
                $(this).find("textarea[name=body]").parent().addClass('error-input');
                $(this).find("textarea[name=body]").attr('placeholder', 'Body cannot be empty..');
            }
            if(send) {
                $('#submit-button').addClass('loading');
                // Send email
                Email.send(params.from,
                    to,
                    subject,
                    body,
                    params.smtp,
                    params.username,
                    params.password,
                    function done(message) {
                        $('#submit-button').removeClass('loading');
                        
                        // Success message
                        if (message == "OK") {
                            $('#submit-button').addClass('success').val('Email successfully sent!');
                            setTimeout(function () {
                                $('#submit-button').removeClass('success').val('Send email');
                            }, 2000);
                        } else {
                            $('.error-message').text(message);
                        }
                    });
            }
        }
        return false;
    });
});