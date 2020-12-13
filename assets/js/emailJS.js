  function resetPassword() {
        var maildata = $('#resetPass').serialize();
        var errors = new Array();
        event.preventDefault();
        $.ajax({
            url: baseUrl + "SendEmailController/sendMail",
            method: "POST",
            data: maildata,
            dataType: "json",
            success: function (data)
            {
                if (data.error) {
                    if (data.email_error !== '') {
                        errors.push(data.email_error);
                    }
                }
                if (errors.length > 0) {
                    bootbox.alert(
                            {
                                message: "<font style='font-size: 15px; color:black;'>" + errors.join("") + "</font>",
                                centerVertical: true,

                            });
                }
                if (data.success) {
                           bootbox.alert(
                            {
                                message: "<font style='font-size: 15px; color:black;'>Email sent</font>",
                                centerVertical: true,

                            });
                            $('#resetPass')[0].reset();
                            //location.href = 'https://www.google.com/gmail/';
                            
                }
                if(data.fail){
                     bootbox.alert(
                            {
                                message: "<font style='font-size: 15px; color:black;'>Email not Logged-In!<br>Please Enter valid Email<font>",
                                centerVertical: true,

                            });
                }
            }
        });
    }