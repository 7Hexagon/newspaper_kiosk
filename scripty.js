a=0;
const e=["https://www.abc.com.py/","https://www.lanacion.com.py/","https://www.popular.com.py/"];
let len =  e.length;
len-=1;

function newSrc() {
    let len =  e.length;
    len-=1;
    a+=1;
    if (a<=len){
        document.getElementById("MyFrame").src=e[a];
    }
    else{
        a=0;
        document.getElementById("MyFrame").src=e[0];
    }
    pag.innerText=a+1;
}

function backSrc() {
    let len =  e.length;
    len-=1;
    a-=1;
    if (a<0){
        a=len;
        document.getElementById("MyFrame").src=e[len];
    }
    else{
        document.getElementById("MyFrame").src=e[a];
    }
    pag.innerText=a+1;
}

function addSrc(){
    console.log(fuente.value);
    e.push(fuente.value);
    console.log(e)
    fuente.value="";    
}