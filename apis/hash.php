<?php

header("Access-Control-Allow-Origin: *");
$string = $_GET["pass"];
if (preg_match('/[A-Za-z]/', $string) && preg_match('/[0-9]/', $string)) {
    $result = "included";
} else {
    $result = "not included";
}
$string = str_replace(' ', '', $string);
$character = strlen($string);
$hash = hash('sha256', $string);
if ($character > 8 && $result == "true") {
    $approved = true;
} else {
    $approved = false;
}
$array = ["hash" => $hash, "character_count" => $character, "letters_numbers" => $result, "strong_pass" => $approved];
echo json_encode($array);
