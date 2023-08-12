let display=document.getElementById('display');
let result;
let sign;
let sym;
let base;

function disp(exp){
    // console.log(e)
    display.value+=exp;
    sign=exp;
}

function dispr(expr){
    display.value=expr+display.value;
    sign=expr;
}

function dispp(expp){
    // console.log(e)
    display.value+=exp;
    sym=expp;
    let item1=display.value;
    let item2=item1.replace("^(","");
    base=item2.replace(")","");
}

function equal(){
    try{
        if(sign == '!'){
            fact();
        } 
        else if(sign == '\u221A'){
            sqrt();
        }
        else if(sign == '\u221B'){
            cbrt();
        }
        else if(sym == '^\u0028'){
            pow();
        }
        else if(sign == '%'){
            percent();
        }
        else if(sign == 'log\u0028'){
            log();
        }
        else if(sign == 'ln\u0028'){
            ln();
        }
        else if(sign == 'sin\u0028'){
            sin();
        }
        else if(sign == 'cos\u0028'){
            cos();
        }
        else if(sign == 'tan\u0028'){
            tan();
        }
        display.value=eval(display.value);
        result=display.value;
    }
    catch(error){
        display.value="Error";
    }
}

function ac(){
    display.value="";
}

function del(){
    display.value=display.value.slice(0,-1)
}

function ans(){
    display.value+=result;
}

function fact(){
    
    let facto,i,num,text;
    facto=1;
    num=display.value;
    text=num.replace("!", "");
    for(i=text;i>=1;i--){
        facto=facto*i;
    }
    display.value=facto;
}

function sqrt(){
    let num,text;
    num=display.value;
    text=num.replace("\u221A", "");
    display.value=Math.sqrt(text);  
}

function cbrt(){
    let num,text;
    num=display.value;
    text=num.replace("\u221B", "");
    display.value=Math.cbrt(text);  
}

function percent(){
    let val,get_val;
    val=display.value;
    get_val=val.split("/");
    ob_val=get_val[0];
    tot=get_val[1];
    tot_val=tot.replace('%',"");
    display.value=(ob_val/tot_val)*100;
}

function log(){
    let num,text,text2;
    num=display.value;
    text=num.replace("log(", "");
    text2=text.replace(")","");
    display.value=Math.log10(text2);
}

function ln(){
    let num,text,text2;
    num=display.value;
    text=num.replace("ln(", "");
    text2=text.replace(")","");
    display.value=(Math.log10(text2))/(0.434294482);
}

function sin(){
    let num,text,text2;
    num=display.value;
    text=num.replace("sin(", "");
    text2=text.replace(")","");
    let rad=text2*(Math.PI/180);
    display.value=Math.sin(rad).toFixed(5);
}

function cos(){
    let num,text,text2;
    num=display.value;
    text=num.replace("cos(", "");
    text2=text.replace(")","");
    let rad=text2*(Math.PI/180);
    display.value=Math.cos(rad).toFixed(5);
}

function tan(){
    let num,text,text2;
    num=display.value;
    text=num.replace("tan(", "");
    text2=text.replace(")","");
    let rad=text2*(Math.PI/180);
    display.value=Math.tan(rad).toFixed(5);
}

function sqr(){
    display.value=(display.value*display.value);
}

function inv(){
    display.value=(1/display.value);
}

function pow(){
    let num1,num2,num,po,power;
    num1=display.value;
    num2=num1.split("^(");
    num=num2[0];
    po=num2[1];
    power=po.replace(")","");
    display.value=Math.pow(num,power);
    sym="";
}
