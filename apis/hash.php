<?php

header("Access-Control-Allow-Origin: *");
$string = $_GET["pass"];
if (preg_match('/[A-Za-z]/', $string) && preg_match('/[0-9]/', $string)) {
    $result = "true";
} else {
    $result = "false";
}
$string = str_replace(' ', '', $string);
$character = strlen($string);
$hash = hash('sha256', $string);
if ($character > 8 && $result == "true") {
    $approved = "Secured";
} else {
    $approved = "Not Secured";
}
$array = ["hash" => $hash, "character_count" => $character, "letters_numbers" => $result, "strong_pass" => $approved];
echo json_encode($array);
