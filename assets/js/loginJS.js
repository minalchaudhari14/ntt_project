function studentLogin() {
    var user = $('#login_form').serialize();
    var errors = new Array();
    //event.preventDefault();
    $.ajax({
        url: baseUrl + "LoginController/studentLoginValidation",
        method: "POST",
        data: user,
        dataType: "json",
        success: function (data) {
            if (data.error) {
                  
                if (data.email_error !== '') {
                 
                    errors.push(data.email_error);
                }
                if (data.pass_error !== '') {
                
                    errors.push(data.pass_error);
                }
            }
            if (errors.length > 0) {
                bootbox.alert(
                        {

                            message: "<font style='font-size: 15px; color:black;'>" + errors.join('') + "</font>",
                            centerVertical: true,

                        });
            }
            if (data.success) {
                location.href = 'dash-board';
                // showProfileData();
            } else if (data.fail) {
                bootbox.alert(
                        {
                            message: "<font style='font-size: 15px; color:black;'>Sorry..!<br>Email or Password is wrong</font>",
                            centerVertical: true,

                        });
                return false;
            }
        }
    });
}