          
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NTT</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <!------ Include the above in your HEAD tag ---------->
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/style.css">
    <script src="http://js.nicedit.com/nicEdit-latest.js" type="text/javascript"></script>
    <script type="text/javascript">bkLib.onDomLoaded(nicEditors.allTextAreas);</script>
</head>
<body style="overflow:hidden;" onload="showDropdownDataEditPage();">
<form id="mainpage">
     <div class="topnav">
        <a href="#" ><img src="http://localhost/project/assets/logo.jpeg" alt="HTML5 Icon" width="128" height="50px"></a>
      <div id="data" style="background-color:#f9f9f9;width:40%;height:60px;text-align:center;padding:20px;margin:0 auto; margin-top: 10px;">    
       </div> 
     </div>

           <div style="width:30px;height:20px;color:white;margin-top:-51px;margin-bottom:1px;margin-left:1490px;align-content: center;">
           <i class="fa fa-power-off" aria-hidden="true" style='font-size:38px;color:white;align-content: center;'>
</i></div>
    </div>
<div class="leftbar">
      
</div>


<div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm" href="#" style="background-color: #0D4F8B">
 <i class="fa fa-angle-double-right" style="font-size:30px;color:white;"></i>

  </a>
  <div class="rightbar">
    <button ><i class="fa fa-window-close" aria-hidden="true" style='font-size:45px;color:#104E8B'></i></button> 
         <div class="text" style="color: #104E8B">
                CANCEL
            </div>   
            <button onclick="saveData();"><i class="fa fa-save" aria-hidden="true" style='font-size:45px;color:#104E8B'></i></button> 
                  
            <div class="text" style="color: #104E8B">
              SAVE
            </div>

            <button><i class="fas fa-check-circle" aria-hidden="true" style='font-size:45px;color:#104E8B'></i></button>
            <div class="text" style="color: #104E8B">
              SUBMIT
            </div>  
   </div>

  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <a href="#"></a>
        <div id="close-sidebar">
         <i class="fa fa-angle-double-left" style="font-size:30px"></i>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul style="margin-top:3px;">
         
          <li class="sidebar-dropdown">
            <a href="#">
              <span>QUALITATIVE INPUT</span>
            </a>
            <div class="sidebar-submenu-list">
              <ul >
                <li onclick="showBorderlkngBack();" id="d1">
                  <a href="javascript:lookingBackData();">Looking Back
                  </a>
                </li>
                <li onclick="showBorderEP();" id="d2">
                  <a href="#">External Perspective</a>
                </li>
                 <li onclick="showBorderCP();" id="d3">
                  <a href="#">Company Perspective
                  </a>
                </li>
                <li onclick="showBorderLA();" id="d4">
                  <a href="#">Looking Ahead
                  </a>
                </li>
                 
                <li onclick="showBorderIP();" id="d5">
                  <a href="#">Improvement Plan
                  </a>
                </li>
                <li onclick="showBorderAP();" id="d6">
                  <a href="#" >Action Points</a>
                </li>
                <li onclick="showBorderAN();" id="d7">
                  <a href="#">Discussion Notes</a>
                </li>
                <li onclick="showBorderAA();" id="d8">
                  <a href="#">All Ask
                  </a>
                </li>

              </ul>
            </div>
          </li>
       
          </ul>
      </div>
    </div>  
  </nav>
  <main class="page-content">
    <div class="container-fluid">
      <h3 class="pclass" id="tab-content" style="color:#0D4F8B;"></h3>
          <textarea id="textarea-data" class="editor" style=" left: 50%;top: 50%; width: 982px; height: 429px; border: solid 1px; "></textarea>
      </div>
      </div>
  </div>
  
<div class="footer1">
<div class="footer-text-left" >Support Contact: @AP.BI</div>

<div class="footer-text" >Last updated at <span id="datetime"></span> by Ajeet yadav</div>
</div>
 <?php $this->load->view('includejs'); ?>
  
</form>  

</body>

</html>