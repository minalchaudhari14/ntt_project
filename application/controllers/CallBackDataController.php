
<?php

class CallBackDataController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('CallBackDataModel');
    } 
    
    public function CallBackData(){
    	 $getdata = $this->input->post('editorData');
    	 $editorContent = $this->input->post('editorContent');
  
        if($editorContent == 'Looking Back')
        {
        	 $data = array(
             'Information' => $getdata,
	        );
	        $query_res = $this->CallBackDataModel->CallBackData($data);
        }
        elseif($editorContent == 'External Perspective')
        {
        		 $data = array(
            'information' => $getdata,
	        );
	        $query_res = $this->CallBackDataModel->epData($data);
        }

        elseif($editorContent == 'Company Perspective')
        {
        	 $data = array(
            'Information' => $getdata,
        );
        $query_res = $this->CallBackDataModel->cpData($data);
        }
        elseif($editorContent == 'Looking Ahead')
        {
        	 $data = array(
            'Information' => $getdata,
        );
        $query_res = $this->CallBackDataModel->laData($data);
        }
        elseif($editorContent == 'Improvement Plan')
        {
        	 $data = array(
            'Information' => $getdata,
        );
        $query_res = $this->CallBackDataModel->ipData($data);
        }
       
       elseif($editorContent == 'Discussion Notes')
       {
        	 $data = array(
            'Information' => $getdata,
        );
        $query_res = $this->CallBackDataModel->dnData($data);
       }
        elseif($editorContent == 'Ask All')
        {
        	 $data = array(
            'Information' => $getdata,
        );
        $query_res = $this->CallBackDataModel->aaData($data);
        }

       

     

    }

}
?>