<?php
header("Access-Control-Allow-Origin: *");

$x = $_GET["nb1"];
$y = $_GET["nb2"];

$result = (2 * $x) + ($y % 2);

$array  = ["first_nb" => $x, "second_nb" => $y, "result" => $result,];


echo json_encode($array);
