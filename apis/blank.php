<?php
header("Access-Control-Allow-Origin: *");
$word = $_GET["blank"];
$word = str_replace(" ", "", $word);
$word = trim($word);
$array = ["word" => $word];
echo json_encode($array);
