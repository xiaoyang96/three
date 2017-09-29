var input_1 = document.getElementById("inp_1");
var input_2 = document.getElementById("inp_2");
var num = "";
var b = "";
var flag = true;
function computer(){
    var btn_1 = document.getElementById("btn_1");
    var btn_2 = document.getElementById("btn_2");
    var btn_3 = document.getElementById("btn_3");
    var btn_4 = document.getElementById("btn_4");
    var btn_5 = document.getElementById("btn_5");
    var btn_6 = document.getElementById("btn_6");
    var btn_7 = document.getElementById("btn_7");
    var btn_8 = document.getElementById("btn_8");
    var btn_9 = document.getElementById("btn_9");
    var btn_0 = document.getElementById("btn_0");
    var btn_10 = document.getElementById("btn_10");
    var btn_11 = document.getElementById("btn_11");
    var btn_12 = document.getElementById("btn_12");
    var btn_13 = document.getElementById("btn_13");
    var btn_14 = document.getElementById("btn_14");
    var clean = document.getElementById("clean");
    var dec = document.getElementById("dec");
    var equal = document.getElementById("equal");

    //0~9
    btn_1.onclick = function(){
        num = "1";
        box_1(num);
        box_2(num);
    }
    btn_2.onclick = function(){
        num = "2";
        box_1(num);
        box_2(num);
    }
    btn_3.onclick = function(){
        num = "3";
        box_1(num);
        box_2(num);
    }
    btn_4.onclick = function(){
        num = "4";
        box_1(num);
        box_2(num);
    }
    btn_5.onclick = function(){
        num = "5";
        box_1(num);
        box_2(num);
    }
    btn_6.onclick = function(){
        num = "6";
        box_1(num);
        box_2(num);
    }
    btn_7.onclick = function(){
        num = "7";
        box_1(num);
        box_2(num);
    }
    btn_8.onclick = function(){
        num = "8";
        box_1(num);
        box_2(num);
    }
    btn_9.onclick = function(){
        num = "9";
        box_1(num);
        box_2(num);
    }
    btn_0.onclick = function(){
        num = "0";
        box_1(num);
        box_2(num);
    }


    //+-*/%，运算符
    btn_10.onclick = function(){
        num = "/";
        box_1(num);
        count(num);
    }
    btn_11.onclick = function(){
        num = "%";
        box_1(num);
        count(num);
    }
    btn_12.onclick = function(){
        num = "*";
        box_1(num);
        count(num);
    }
    btn_13.onclick = function(){
        num = "-";
        box_1(num);
        count(num);
    }
    btn_14.onclick = function(){
        num = "+";
        box_1(num);
        count(num);
    }


    //小数点
    dec.onclick = function(){
        num = ".";
        if(flag==false){
            return;
        }
        box_1(num);
        box_2(num);
        flag = false;
    }


    //等于号
    equal.onclick = function(){
        num = "=";
    }


    //清除键
    clean.onclick = function(){
        num = "C";
    }
}
function box_1(val){
    if(input_1.value.charAt(input_1.value.length-1)=="*"||input_1.value.charAt(input_1.value.length-1)=="/"||input_1.value.charAt(input_1.value.length-1)=="+"||input_1.value.charAt(input_1.value.length-1)=="-"||input_1.value.charAt(input_1.value.length-1)=="%"){
        input_2.value = "";
    }
    input_1.value = input_1.value + val;
}

function box_2(val){
    input_2.value = input_2.value + val;
}
function count(val){
    if(input_1.value.match(/[+-\/\*%]/).length==1){
        b = input_1.value + val;
        return;
    }
    input_2.value = eval(b + input_2.value);
    flag = true;
}
computer();
