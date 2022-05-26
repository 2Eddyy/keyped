let x="";
function refresh(){
    let number='0123456789';
    keyvalue="";
    for(let i=0;keyvalue.length<10;i++){
        random=Math.round(Math.random()*10);
        if(keyvalue.indexOf(random)>-1)continue;
        keyvalue+=number.substring(random,random+1);
    }
    // console.log(keyvalue);

    counter=-1;
    while(counter < 10){
        counter++;
        document.querySelector('#num'+counter).value=keyvalue[counter];
        // console.log(counter);
    }
   
}

function clickButton(btn){
    show(x+=btn);
}

function show(btn){
    textvalue.value=btn;
}

function reset(){
    show(x = x.substring(0,x.length-1))
}  






















// function reset(){
//     document.getElementById('textvalue').value='';
// }



