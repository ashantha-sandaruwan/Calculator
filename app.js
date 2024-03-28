function btn0(){
    document.getElementById("display").value=document.getElementById("display").value+0;
}
function btn1(){
    document.getElementById("display").value=document.getElementById("display").value+1;
}
function btn2(){
    document.getElementById("display").value=document.getElementById("display").value+2;
}
function btn3(){
    document.getElementById("display").value=document.getElementById("display").value+3;
}
function btn4(){
    document.getElementById("display").value=document.getElementById("display").value+4;
}
function btn5(){
    document.getElementById("display").value=document.getElementById("display").value+5;
}
function btn6(){
    document.getElementById("display").value=document.getElementById("display").value+6;
}
function btn7(){
    document.getElementById("display").value=document.getElementById("display").value+7;
}
function btn8(){
    document.getElementById("display").value=document.getElementById("display").value+8;
}
function btn9(){
    document.getElementById("display").value=document.getElementById("display").value+9;
}
function btnDivide(){
    document.getElementById("display").value=document.getElementById("display").value+"/";
}
function btnMultiply(){
    document.getElementById("display").value=document.getElementById("display").value+"*";
}
function btnSubtract(){
    document.getElementById("display").value=document.getElementById("display").value+"-";
}
function btnAdd(){
    document.getElementById("display").value=document.getElementById("display").value+"+";
}
function btnModule(){
    document.getElementById("display").value=document.getElementById("display").value+"%";
}
function btnDecimal(){
    document.getElementById("display").value=document.getElementById("display").value+".";
}
function btnClear(){
    document.getElementById("display").value="";
}
function btnBack(){
    document.getElementById("display").value=document.getElementById("display").value.toString().slice(0,-1);
}
function btnEql(){
    document.getElementById("display").value=eval(document.getElementById("display").value);
}