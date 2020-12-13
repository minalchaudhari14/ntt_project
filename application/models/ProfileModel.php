<?php

class ProfileModel extends CI_Model {

    public function profileData() {
        
             $query = $this->db->select('*')
                ->get('viewtable');
                return $query->result();
    }

 
}