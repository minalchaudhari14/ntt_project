(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {
       $('#sidebar').toggleClass('active');
        if ($('#sidebar').hasClass('active')) {
            $('#image').hide();  
            $('#image1').hide();  
            $('#pname').hide();
            $('#pmob').hide();
            $('#pemail').hide();
            $('#dashboard').hide();
            $('#account').hide(); 
            $('#mytests').hide();
            $('#bca').hide();
            $('#mca').hide();
            $('#mba').hide();
            $('#pass').hide();
            $('#logout').hide();
        }
        else if($('#sidebar').toggleClass('active').removeClass('active')){
            $('#image').show();
            $('#image1').show();
            $('#pname').show();
            $('#pmob').show();
            $('#pemail').show();
            $('#dashboard').show();
            $('#account').show();
            $('#mytests').show();
            $('#bca').show();
            $('#mca').show();
            $('#mba').show();
            $('#pass').show();
            $('#logout').show();
        }

    }); 
})(jQuery);
