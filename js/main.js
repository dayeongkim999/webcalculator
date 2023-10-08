var whilenum = true;
const $text = document.querySelector(".text");

function num(int){
    whilenum = true;
    if (int == 1){  
        $text.innerHTML += '1';
    }
    else if (int == 2){  
        $text.innerHTML += '2';
    }
    else if (int == 3){  
        $text.innerHTML += '3';
    }
    else if (int == 4){  
        $text.innerHTML += '4';
    }
    else if (int == 5){  
        $text.innerHTML += '5';
    }
    else if (int == 6){  
        $text.innerHTML += '6';
    }
    else if (int == 7){  
        $text.innerHTML += '7';
    }
    else if (int == 8){  
        $text.innerHTML += '8';
    }
    else if (int == 9){  
        $text.innerHTML += '9';
    }
    else if (int == 0){  
        $text.innerHTML += '0';
    }
}

function cls(){
    $text.innerHTML = '';
}

function operators(oper){
    if (whilenum == false){
        alert('연산자 다음에는 숫자를 입력해야 합니다');
        return;
    }
    else{
        whilenum = false;
        if (oper == '+')
            $text.innerHTML += '+';
        else if (oper == '-')
            $text.innerHTML += '-';
        else if (oper == '*')
            $text.innerHTML += '*';
        else if (oper == '/')
            $text.innerHTML += '/';
    }
}

var result;
function cal(){
    if (whilenum == false){
        alert('계산식의 마지막은 숫자여야 합니다');
        return;
    }   
    else{
        result = eval($text.innerHTML);
        $text.innerHTML = result;
    }
}
