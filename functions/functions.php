<?php



function getRandom($wordsAsArray,$SessionArray)
{
    $randomNumber=rand(0,65);
    
    
    if(!in_array($randomNumber,$SessionArray))
    {
    $_SESSION['usedWords'][]=$randomNumber;
    $randomWord = $wordsAsArray[$randomNumber];
    return $randomWord;
    }
    else 
    {
        $overflowProtector = 0;
    while (in_array($randomNumber,$SessionArray))
    {
        $randomNumber=rand(0,65);
        $overflowProtector++;
        if($overflowProtector>=10)
        {
            return "No words left in List";
        }
    }
    $_SESSION['usedWords'][]=$randomNumber;
    $randomWord = $wordsAsArray[$randomNumber];
    return $randomWord;
    }
    
}








































?>