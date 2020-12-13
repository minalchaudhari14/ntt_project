
<?php

class CallBackDataModel extends CI_Model {

   
    public function CallBackData($studentresult_data) {
        $query = $this->db->insert('looking_back', $studentresult_data);
        if ($query) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

     public function epData($studentresult_data) {
        $query = $this->db->insert('external_prespective', $studentresult_data);
        if ($query) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

 public function cpData($studentresult_data) {
        $query = $this->db->insert('company_prepective', $studentresult_data);
        if ($query) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

 public function laData($studentresult_data) {
        $query = $this->db->insert('looking_ahead', $studentresult_data);
        if ($query) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

 public function ipData($studentresult_data) {
        $query = $this->db->insert('improvement_plan', $studentresult_data);
        if ($query) {
            return TRUE;
        } else {
            return FALSE;
        }
    }



 public function dnData($studentresult_data) {
        $query = $this->db->insert('discussion_notes', $studentresult_data);
        if ($query) {
            return TRUE;
        } else {
            return FALSE;
        }
    }









   

}
?>