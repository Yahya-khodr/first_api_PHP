<?php

$word = $_GET["blank"];
$word = trim($word);
$array = ["word" => $word];

echo json_encode($array);
