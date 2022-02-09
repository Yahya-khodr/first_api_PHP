<?php

function Palindrome($string){ 
    if (strrev($string) == $string){ 
        return 1; 
    }
    else{
        return 0;
    }
} 

$string = $_GET["name"];
if(Palindrome($string)){ 
    echo "Palindrome"; 
}
else { 
echo "Not a Palindrome"; 
}

$array = ["name" => $string];
echo json_encode($array);
?> 