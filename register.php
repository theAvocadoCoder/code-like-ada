<?php

// register applicant

$connect = new PDO("mysql:host=localhost;dbname=code-like-ada", "root", "1tbgwmf0ptd//Ah,hastmMLP//Jtttgptb");
$received_data = json_decode(file_get_contents("php://input"));
$data = array();
if($received_data->action == 'fetchall')
{
    $query = "SELECT * FROM reg-oct-2021; ORDER BY id DESC";
    $statement = $connect->prepare($query);
    $statement->execute();
    while($row = $statement->fetch(PDO::FETCH_ASSOC))
    {
        $data[] = $row;
    }
    echo json_encode($data);
}
if($received_data->action === 'register')
{
    $data = array(
        ':first_name' => $received_data->firstName,
        ':last_name' => $received_data->lastName,
        ':email' => $received_data->lastName,
        ':intent' => $received_data->$intent
    );

    $query = "INSERT INTO reg-oct-2021 (first_name, last_name, email, intent) VALUES (:first_name, :last_name, :email, :intent)";

    $statement = $connect->prepare($query);

    $statement->execute($data);

    $output = array(
        'message' => 'Application Successful.'
    );

    echo json_encode($output);
}
if($received_data->action == 'findApplicant')
{
    $query = "SELECT * FROM reg-oct-2021 WHERE id = '".$received_data->id."'";

    $statement = $connect->prepare($query);

    $statement->execute();

    $result = $statement->fetchAll();

    if($result->length)
    {
        $data['registered'] = true;
    }
    else {
        $data['registered'] = false;
    }

    echo json_encode($data['registered']);
}


?>