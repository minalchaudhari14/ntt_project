
<?php

class ShowDataController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('ProfileModel');
    }

 
    public function profileData() {
        $data = $this->ProfileModel->profileData();
        echo json_encode($data);
        //echo $this->session->userdata('email');
    }

}
