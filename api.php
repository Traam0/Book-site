
<?php
    $form = file_get_contents("php://input");
    $form = json_decode($form); //? parsing the text to a json object.
    

    if(isset($form->request)){

        switch($form->request){
            case ('submition'):
                writeData($form->mail);
                echo 'done';
                break;

            case ('request'):
                $response = readData();
                echo $response;
                break;
        }
    }else{
        die('Request Type undefined;');
    }





    function writeData($data){
        $strm = fopen('./waitlist.dat', 'a');
        fwrite($strm, $data."\n");
        fclose($strm);
    }

    function readData(){
        $strm = fopen('./waitlist.dat', 'r');
        $rv = fgets($strm);
        fclose($strm);

        return $rv;
    }
?>