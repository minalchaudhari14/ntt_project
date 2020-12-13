//bkLib.onDomLoaded(nicEditors.allTextAreas);

var editorContent="Looking Back";
function saveData()
{
  // var txt = $("#textarea-data").val(); 
 //alert(editorContent); 
  var editorData = $('#mainpage').find('.nicEdit-main').text();
   $.ajax({
        url: baseUrl + 'CallBackDataController/CallBackData',
        type: 'post',
        data: {'editorData': editorData,'editorContent': editorContent},
        dataType: 'json',
        //success: function (response) {}
          
       

    });
      //  alert(editorData);
}
function getDropDownData(){
 // var countryText = $("#country option:selected").text();
  //var mText = $("#month option:selected").text();
  //var yearText = $("#year option:selected").text();



  location.href = baseUrl + 'editPage';

  //if(countryText != 'Choose your country' && mText != 'Choose your month' && yearText !=){

  
}
$('#editDiv').click(function(){
     // location.href = baseUrl + 'editPage';
});
function showBorderlkngBack(){
  rmvBorder();
  $("#d1").css("border", "1px solid white");
   $("#tab-content").html("Looking Back");
        editorContent='Looking Back';
}

function showBorderEP(){
  rmvBorder();
  $("#d2").css("border", "1px solid white");
   $("#tab-content").html("External Perspective");
       editorContent='External Perspective';


}


function showBorderCP(){
  rmvBorder();
  $("#d3").css("border", "1px solid white");
   $("#tab-content").html("Company Perspective");
            editorContent='Company Perspective';


}

function showBorderLA(){
  rmvBorder();
  $("#d4").css("border", "1px solid white");
   $("#tab-content").html("Looking Ahead");
        editorContent='Looking Ahead';


}


function showBorderIP(){
  rmvBorder();
  $("#d5").css("border", "1px solid white");
   $("#tab-content").html("Improvement Plan");
        editorContent='Improvement Plan';


}

function showBorderAP(){
  rmvBorder();
  $("#d6").css("border", "1px solid white");
   $("#tab-content").html("Action Points");
        editorContent='Action Points';


}
function showBorderAN(){
  rmvBorder();
  $("#d7").css("border", "1px solid white");
   $("#tab-content").html("Discussion Notes");
        editorContent='Discussion Notes';


}
function showBorderAA(){
  rmvBorder();
  $("#d8").css("border", "1px solid white");
   $("#tab-content").html("Ask All");
        editorContent='Ask All';


}
function rmvBorder(){
  $("#d1").css("border", "0px ");
  $("#d2").css("border", "0px ");
  $("#d3").css("border", "0px ");
  $("#d4").css("border", "0px ");
  $("#d5").css("border", "0px ");
  $("#d6").css("border", "0px ");
  $("#d7").css("border", "0px ");
  $("#d8").css("border", "0px ");

}



  jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
   $("#tab-content").html("Looking Back");
     $("#d1").css("border", "0px");
  $("#d2").css("border", "0px ");
  $("#d3").css("border", "0px ");
  $("#d4").css("border", "0px ");
  $("#d5").css("border", "0px ");
  $("#d6").css("border", "0px ");
  $("#d7").css("border", "0px ");
  $("#d8").css("border", "0px ");



});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
     $("#d1").css("border", "1px solid white");
        $("#tab-content").html("Looking Back");
        editorContent='Looking Back';
   /*$(".pclass").css("color", "blue");*/

});
});
    var date_selected = new Date();
   var date1 =   date_selected.getFullYear() + " " +   ('0' + (date_selected.getMonth()+1)).slice(-2) + " " +  ('0' + (date_selected.getDate()+1)).slice(-2);
        document.getElementById("datetime").innerHTML = date1.toLocaleString();




        
function showDropdownData()
{
     $("#d1").css("border", "1px solid white");

   $("#tab-content").html("Looking Back");
   
    $.ajax({
        url: baseUrl + "ShowDataController/profileData",
        type: "POST",

        dataType: 'json',
        success: function (data) {
                  
            $.each(data, function (index, value) {
              
               
                var course = '';
                var monthdata = '';
                var countrydata = '';
                var yeardata = '';
                var subjectcode = '';
                var subjectname = '';
                var i;
                var j=1;

countrydata +=  '<select class="mdb-select md-form" id="country"   searchable="Search here.."><option value="">Choose your country</option>';
                for (i in data) {
                    var coursenames = data[i].Country;
                    countrydata += '<option value="">'+coursenames +'</option>';
                $("#data").html(countrydata);

                  j++;
                }
                countrydata +=  '</select>';
                $("#data").html(countrydata);


countrydata +=  '<select class="mdb-select md-form" id="month"  searchable="Search here.."><option value="">Choose your Month</option>';
                for (i in data) {
                    var coursenames = data[i].Months;
                    countrydata += '<option value="">'+coursenames +'</option>';
                $("#data").html(countrydata);

                  j++;
                }
                countrydata +=  '</select>';
                $("#data").html(countrydata);


countrydata +=  '<select class="mdb-select md-form" id="year" onchange="getDropDownData();"  searchable="Search here.."><option value="">Choose your Year</option>';
                for (i in data) {
                    var coursenames = data[i].Year;
                    countrydata += '<option value="">'+coursenames +'</option>';
                $("#data").html(countrydata);

                  j++;
                }
                countrydata +=  '</select>';
                $("#data").html(countrydata);


            });
        }
    });
}


        
function showDropdownDataEditPage()
{
     $("#d1").css("border", "1px solid white");

   $("#tab-content").html("Looking Ahead");

  
    $.ajax({
        url: baseUrl + "ShowDataController/profileData",
        type: "POST",

        dataType: 'json',
        success: function (data) {
                  
            $.each(data, function (index, value) {
              
               
                var course = '';
                var monthdata = '';
                var countrydata = '';
                var yeardata = '';
                var subjectcode = '';
                var subjectname = '';
                var i;
                var j=1;

countrydata +=  '<select class="mdb-select md-form" id="country"   searchable="Search here.."><option value="">Choose your country</option>';
                for (i in data) {
                    var coursenames = data[i].Country;
                    countrydata += '<option value="">'+coursenames +'</option>';
                $("#data").html(countrydata);

                  j++;
                }
                countrydata +=  '</select>';
                $("#data").html(countrydata);


countrydata +=  '<select class="mdb-select md-form" id="month"  searchable="Search here.."><option value="">Choose your Month</option>';
                for (i in data) {
                    var coursenames = data[i].Months;
                    countrydata += '<option value="">'+coursenames +'</option>';
                $("#data").html(countrydata);

                  j++;
                }
                countrydata +=  '</select>';
                $("#data").html(countrydata);


countrydata +=  '<select class="mdb-select md-form" id="year"   searchable="Search here.."><option value="">Choose your Year</option>';
                for (i in data) {
                    var coursenames = data[i].Year;
                    countrydata += '<option value="">'+coursenames +'</option>';
                $("#data").html(countrydata);

                  j++;
                }
                countrydata +=  '</select>';
                $("#data").html(countrydata);


            });
        }
    });
}
