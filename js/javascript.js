if(sessionStorage.getItem('daltonism')!=null){
    changeDaltonismMode(sessionStorage.getItem('daltonism'));
}

function changeDaltonismMode(storageDaltonismValue){
    let option;
    if(storageDaltonismValue==null){
        option=document.getElementById('daltonismOption').value;
    }else{
        option=storageDaltonismValue;
        document.getElementById('daltonismOption').value=option;
    }
    let daltonismMod=['tritanopiaMode','deuteranopiaMode','protanopiaMode','Normal'];
    let daltonismClass;
    for(let i=0;i<=3;i++){
        if(document.getElementById("container").classList.contains(daltonismMod[i])){
            daltonismClass=daltonismMod[i];
        }
    }
    switch (option){
        case "Normal":
            document.getElementById("container").classList.replace(daltonismClass,"Normal");
            document.getElementById("cabecera").classList.replace(daltonismClass,"Normal");
            document.getElementById("footer").classList.replace(daltonismClass,"Normal");
            document.getElementById("accesibilityMenu").classList.replace(daltonismClass,"Normal");
            break;
        case "Deuteranopia":
            document.getElementById("container").classList.replace(daltonismClass,"deuteranopiaMode");
            document.getElementById("cabecera").classList.replace(daltonismClass,"deuteranopiaMode");
            document.getElementById("footer").classList.replace(daltonismClass,"deuteranopiaMode");
            document.getElementById("accesibilityMenu").classList.replace(daltonismClass,"deuteranopiaMode");
            break;
        case "Tritanopia":
            document.getElementById("container").classList.replace(daltonismClass,"tritanopiaMode");
            document.getElementById("cabecera").classList.replace(daltonismClass,"tritanopiaMode");
            document.getElementById("footer").classList.replace(daltonismClass,"tritanopiaMode");
            document.getElementById("accesibilityMenu").classList.replace(daltonismClass,"tritanopiaMode");
            break;
        case "Protanopia":
            document.getElementById("container").classList.replace(daltonismClass,"protanopiaMode");
            document.getElementById("cabecera").classList.replace(daltonismClass,"protanopiaMode");
            document.getElementById("footer").classList.replace(daltonismClass,"protanopiaMode");
            document.getElementById("accesibilityMenu").classList.replace(daltonismClass,"protanopiaMode");
            break;
    }
    sessionStorage.setItem('daltonism',option);
}

let cont=0;
let fontSizeP=18;
let fontSizeH=32;
let fontSizeL=20;
function changeFontSize(simbol){
    let progressBar=document.getElementById("progressContent");
    let porcent=["progressContent-25","progressContent-50","progressContent-75","progressContent-100"];
    let width=progressBar.className;
    let container=document.getElementById("container");
    let parrafos=container.getElementsByTagName("p");
    let titulos=container.getElementsByTagName("h2");
    let labels=container.getElementsByTagName("label");

    if(simbol=="+"){
        if(width!=porcent[3]){
            cont++;
            fontSizeP++;
            fontSizeH++;
            fontSizeL++;
            progressBar.classList.replace(width,porcent[cont]);
            for(let i=0;i<parrafos.length;i++){
                parrafos[i].style.fontSize=fontSizeP+'px';
            }
            for(let x=0;x<titulos.length;x++){
                titulos[x].style.fontSize=fontSizeH+'px';
            } 
            for(let z=0;z<labels.length;z++){
                labels[z].style.fontSize=fontSizeL+'px';
            } 
        }
    }else if(simbol=="-"){
        if(width!=porcent[0]){
            cont--;
            fontSizeP--;
            fontSizeH--;
            fontSizeL--;
            progressBar.classList.replace(width,porcent[cont]); 
            for(let i=0;i<parrafos.length;i++){
                parrafos[i].style.fontSize=fontSizeP+'px';
            }
            for(let x=0;x<titulos.length;x++){
                titulos[x].style.fontSize=fontSizeH+'px';
            } 
            for(let z=0;z<labels.length;z++){
                labels[z].style.fontSize=fontSizeL+'px';
            } 
        }
    }
}

let score=0;
let testCount=0;
function test(){
    let answers=[8,12,74,16,2,6,29,7,45,5];
    let userAnswer=document.getElementById("answerTest").value;
    document.getElementById("answerTest").value="";
    if(answers[testCount]==userAnswer){
        score++;
    }
    testCount++;
    if(testCount!=10){
        document.getElementById("imgTest").src="img/test"+(testCount+1)+".jpg"    
        document.getElementById("nQuestion").innerText=(testCount+1);
    }else{
        endTest();
    }
    
}
function endTest(){
    document.getElementById("imgTestcontainer").style.display="none";
    document.getElementById("infoTest").style.display="none";
    document.getElementById("nQuestionContainer").style.display="none";
    document.getElementById("testResults").style.display="flex";
    document.getElementById("result").innerText=score;
    if(score>=0 && score<5){
        document.getElementById("infoResult").innerText="Padeces algún tipo de daltonismo severo";
    }else if(score>=5 && score<=7){
        document.getElementById("infoResult").innerText="Padeces algún tipo de daltonismo leve";
    }else{
        document.getElementById("infoResult").innerText="¡Enhorabuena! Tienes una vista perfecta";
    }
}

function restartTest(){
    document.getElementById("imgTestcontainer").style.display="flex";
    document.getElementById("infoTest").style.display="flex";
    document.getElementById("nQuestionContainer").style.display="block";
    document.getElementById("testResults").style.display="none";
    score=0;
    testCount=0;
    document.getElementById("imgTest").src="img/test1.jpg"  
}

function formCheck(){
    let tlf=document.getElementById("tlf").value;
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let textarea=document.getElementById("textarea").value;
    let error=document.getElementsByClassName("errorContainer");
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(tlf=="" || tlf.length!=9 || isNaN(tlf)){
        error[1].style.display="flex";
    }else{
        error[1].style.display="none";
    }

    if(name==""){
        error[0].style.display="flex";
    }else{
        error[0].style.display="none";
    }
    console.log(regex.test(email)==false)
    if(regex.test(email)==false){
        error[2].style.display="flex";
    }else{
        error[2].style.display="none";
    }

    if(textarea==""){
        error[3].style.display="flex";
    }else{
        error[3].style.display="none";
    }
}

function mobileMenu(){
    if(document.getElementById('cabecera').style.height=='80px'){
        document.getElementById('cabecera').style.height='40px';
    }else{
        document.getElementById('cabecera').style.height='80px';
    }
    
}

if(screen.width<=800){
    document.getElementById('accesibilityMenu').classList.add('displayOff');
    document.getElementById('accesibilityIcon').classList.replace('displayOff','displayOnIcon');
}
function showAccesibilityMenu(){
    document.getElementById('accesibilityMenu').classList.replace('displayOff','displayOn');
    document.getElementById('accesibilityIcon').classList.replace('displayOnIcon','displayOff');
}
function hiddeAccesibilityMenu(){
    document.getElementById('accesibilityMenu').classList.replace('displayOn','displayOff');
    document.getElementById('accesibilityIcon').classList.replace('displayOff','displayOnIcon');
}