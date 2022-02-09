<?php

function Palindrome($string)
{
    if (strrev($string) == $string) {
        return 1;
    } else {
        return 0;
    }
}

$string = $_GET["name"];
if (Palindrome($string)) {
    $result = "Palindrome";
} else {
    $result = "Not a Palindrome";
}

$array = ["name" => $string, "result" => $result];
echo json_encode($array);
