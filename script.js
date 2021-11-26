function func1(){
    document.getElementById('test4').innerHTML="Test4 için paragraf değiştirildi.";
}
function gunVakti() {
    const time=new Date().getHours();
    let greeting;
    if (time<10) {
        greeting="Günaydın";
    } else if(time>10 && time<20) {
        greeting="İyi günler";
        
    }
    else{
        greeting="İyi akşamlar";
    }
    document.getElementById("test").innerHTML=greeting;
}

function haftaSonu(params) {
    let text;
    switch (new Date().getDay()) {
        case 6:
            text="Bugün günlerden Cumartesi";
            break;
        case 0:
            text="Bugün günlerden Pazar";
            break;
    
        default:
            text="Haftasonunu iple çekiyorum";
            break;
            
    }
    document.getElementById("test1").innerHTML=text;
}
function dongulerFor(params) {
    let text="";
    for (let i = 0; i <5; i++) {
        text+="Sayi "+(i+1)+ "<br>"    
    }
    document.getElementById("test2").innerHTML=text;
}

function dongulerArrayFor() {
    let text="";
    const isimler=['Furkan','Ali','Aybike','Azize'];
    for (let i = 0; i < isimler.length; i++) {
        text += isimler[i]+ "<br>";

        
    }
    document.getElementById("test3").innerHTML=text;
}

function dongulerArrayFor2() {
    let text="";
    const isimler=['Furkan','Ali','Aybike','Azize'];
    for (let i = 0; i < isimler.length; ) {
        text += isimler[i]+ "<br>";
        i++;
        
    }
    document.getElementById("test4").innerHTML=text;
}
function deneme(){
    var i=5;
    for (let i = 0; i < 10; i++) {
    }
    document.getElementById("test5").innerHTML=i;

}