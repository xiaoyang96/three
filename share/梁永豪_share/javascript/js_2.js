var input_1 = document.getElementsByTagName("input")[0];
var input_2 = document.getElementsByTagName("input")[1];
var num = "";//存计算器上按钮的字符
var a = "";//等于号的标杆，点击等于号后下一次数字输入前清空
var b = "";//运算的标杆，计算时存值用的
var c = "";//运算符的标杆，运算符不可重复点击
var d = "";//一开始那个"0"的标杆，改着改着我都不知道这东西有没有用了
var e = "";//同上，因为有两个输入框
var f = "";//小数点的运算标杆，不可出现0.89.7类似的情况
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
    var btn_10 = document.getElementById("btn_10");
    var btn_11 = document.getElementById("btn_11");
    var btn_12 = document.getElementById("btn_12");
    var btn_13 = document.getElementById("btn_13");
    var btn_14 = document.getElementById("btn_14");
    var btn_15 = document.getElementById("btn_15");
    var btn_16 = document.getElementById("btn_16");
    var btn_17 = document.getElementById("btn_17");
    var btn_18 = document.getElementById("btn_18");
    btn_1.onclick = function(){
        num = "7";
        inp_1(num);
        inp_2(num);
    }
    btn_2.onclick = function(){
        num = "8";
        inp_1(num);
        inp_2(num);
    }
    btn_3.onclick = function(){
        num = "9";
        inp_1(num);
        inp_2(num);
    }
    btn_4.onclick = function(){
        num = "/";
        if(c != ""){//运算符号不可重复输入
            change(num);
            return;
        }
        inp_1(num);
        count(num);
        c = "/";
    }
    btn_5.onclick = function(){
        num = "%";
        if(c != ""){//运算符号不可重复输入
            change(num);
            return;
        }
        inp_1(num);
        count(num);
        c = "%";
    }
    btn_6.onclick = function(){
        num = "4";
        inp_1(num);
        inp_2(num);
    }
    btn_7.onclick = function(){
        num = "5";
        inp_1(num);
        inp_2(num);
    }
    btn_8.onclick = function(){
        num = "6";
        inp_1(num);
        inp_2(num);
    }
    btn_9.onclick = function(){
        num = "*";
        if(c != ""){//运算符号不可重复输入
            change(num);
            return;
        }
        inp_1(num);
        count(num);
        c = "*";
    }
    btn_10.onclick = function(){
        num = "=";
        count(num);
        //-------------------------------------------------------
    }
    btn_11.onclick = function(){
        num = "1";
        inp_1(num);
        inp_2(num);
    }
    btn_12.onclick = function(){
        num = "2";
        inp_1(num);
        inp_2(num);
    }
    btn_13.onclick = function(){
        num = "3";
        inp_1(num);
        inp_2(num);
    }
    btn_14.onclick = function(){
        num = "-";
        if(c != ""){//运算符号不可重复输入，直接返回
            change(num);
            return;
        }
        // else if(e==""){//一开始那个"0"输入-号后清空
        //     input_2.value = "";
        //     e == "!";
        // }
        inp_1(num);
        count(num);
        //--------------------------------------------------------
        c = "-";
    }
    btn_15.onclick = function(){
        num = "0";
        inp_1(num);
        inp_2(num);
    }
    btn_16.onclick = function(){
        num = ".";
        if(f=="."){//小数点不可重复输入
            // console.log(1);
            return;
        }else if(a=="="||d==""){
            // console.log(2);
            input_1.value = "0.";
            input_2.value = "0.";
            a = "";//--------------------------------------------------------
            return;
        }
        inp_1(num);
        inp_2(num);
        c = ".";
        f = ".";
    }
    btn_17.onclick = function(){
        num = "+";
        if(c != ""){//运算符号不可重复输入 /*d==""一开始那个"0"不接运算符*/
            change(num);
            return;
        }
        inp_1(num);
        count(num);
        c = "+";
    }
    btn_18.onclick = function(){
        clean();
    }
}
function inp_1(val){
    var fuck = /[0-9]/;
    var num = input_1.value;
    var last = num.charAt(num.length-1);//最后一个字符
    // if(input_1.value == "0"&&val == "0"){
    //     return;
    // }
    if(last=="*"||last=="+"||last=="-"||last=="/"||last=="%"){       
        input_2.value = "";//最后一个字符为*+-/%时，按1~9触发清空  
    }
    else if(a=="="&&fuck.test(val)){//等于号之后且输入0~9即清空
        input_2.value = "";
        input_1.value = "";
    }
    if(input_1.value=="0"&&val!="."&&/[+\/\-*%]/.test(val)==false){
    //input_1的值为零且输入的值不为小数点和运算符，覆盖
        input_1.value = val;
    }
    else if(input_1.value.charAt(input_1.value.length-1)=="0"&&/[+\/\-*%]/.test(input_1.value.charAt(input_1.value.length-2))&&val=="0"){

        input_1.value = input_1.value.substr(0,input_1.value.length-1)+val;
        /*
            当最后一个字符为0且该0前一位字符为运算符且本次输入为0时，这次输入把该0覆盖
         */
    }
    else if(/[+\/\-*%]/.test(input_1.value.charAt(input_1.value.length-1))==true&&val=="."){
        //输入小数点且第一个输入框最后一位字符为运算符时，改变input_1的值
        input_1.value = input_1.value + "0.";
    }
    else{
        input_1.value = input_1.value + val;
    }
    a = "";
    c = "";
    d = "!";
}
function inp_2(val){
    if(input_2.value=="0"&&val!="."){//值为零且输入的不为小数点，覆盖
        input_2.value = val;
    }
    else if(val=="."&&/([+\/\-*%]0.)$/.test(input_1.value)){
        //输入小数点且第一个输入框以运算符+0.结尾时，改变input_2的值
        input_2.value = "0.";
    }
    else{
        input_2.value = input_2.value + val;
    }
    a = "";
    c = "";
    e = "!";
}
function clean(){  
    input_1.value = "0";
    input_2.value = "0";
    a = "";
    b = "";
    c = "";
    d = "";
    e = "";
    f = "";
}
function count(sign){
    if(sign == "="){
        if(/[+\/\-*%]/g.test(input_1.value.substr(1,input_1.value.length-1))==false){//按等于时除开头第一个字符都没有运算符时，直接返回
            return;
        }
        // console.log(b);
        input_2.value = eval(b+input_2.value);
        input_1.value = input_2.value;
        a = "=";
        b = "";
        f = "";
        if(/[+\/\-*%]/g.test(input_1.value)==false){
            c="";//解决类似6-=*连续输出符号时*不起作用的情况
        }
        return;
    }
    if(patch("[*%/+-]",input_1.value)==1){
        b = input_1.value;
    }
    if(patch("[*%/+-]",input_1.value)>=2){
        input_2.value = eval(b+input_2.value);
        b = input_2.value+sign;
    }
    f = "";
}
function change(val){//符号覆盖
    if(/[+\/\-*%]/g.test(input_1.value.charAt(input_1.value.length-1))){
        input_1.value = input_1.value.replace(/[+\/\-*%]$/,val);
        b = input_2.value+val;
    }
}

//其实不用这么写，但是懒得改了
function patch(re,s){//参数1正则式，参数2字串，*%/+-出现的次数
    re=eval("/"+re+"/ig")
    return s.match(re).length;//返回和查找相同的字符串，length等于次数
}

computer();

