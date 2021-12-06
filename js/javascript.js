if(sessionStorage.getItem('daltonism')!=null){
    changeDaltonismMode(sessionStorage.getItem('daltonism'));
}

function changeDaltonismMode(storageDaltonismValue){
    let option;
    let daltonismOption=document.querySelector('#daltonismOption');
    let container=document.querySelector('#container');
    let header=document.querySelector('#cabecera');
    let footer=document.querySelector('#footer');
    let accesibilityMenu=document.querySelector('#accesibilityMenu');
    if(storageDaltonismValue===null){
        option=daltonismOption.value;
    }else{
        option=storageDaltonismValue;
        daltonismOption.value=option;
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
            container.classList.replace(daltonismClass,"Normal");
            header.classList.replace(daltonismClass,"Normal");
            footer.classList.replace(daltonismClass,"Normal");
            accesibilityMenu.classList.replace(daltonismClass,"Normal");
            break;
        case "Deuteranopia":
            container.classList.replace(daltonismClass,"deuteranopiaMode");
            header.classList.replace(daltonismClass,"deuteranopiaMode");
            footer.classList.replace(daltonismClass,"deuteranopiaMode");
            accesibilityMenu.classList.replace(daltonismClass,"deuteranopiaMode");
            break;
        case "Tritanopia":
            container.classList.replace(daltonismClass,"tritanopiaMode");
            header.classList.replace(daltonismClass,"tritanopiaMode");
            footer.classList.replace(daltonismClass,"tritanopiaMode");
            accesibilityMenu.classList.replace(daltonismClass,"tritanopiaMode");
            break;
        case "Protanopia":
            container.classList.replace(daltonismClass,"protanopiaMode");
            header.classList.replace(daltonismClass,"protanopiaMode");
            footer.classList.replace(daltonismClass,"protanopiaMode");
            accesibilityMenu.classList.replace(daltonismClass,"protanopiaMode");
            break;
    }
    sessionStorage.setItem('daltonism',option);
}


function changeFontSize(simbol){
    let progressBar=document.querySelector("#progressContent");
    let progresBarPorcent=["progressContent-25","progressContent-50","progressContent-75","progressContent-100"];
    let progresBarWith=progressBar.className;
    let container=document.querySelector("#container");
    let texts=container.querySelectorAll("[size='change']");
    let aux=0;
    if(simbol==="+"){
        if(progresBarWith!=progresBarPorcent[3]){
            aux=1;
            progressBar.classList.replace(progresBarWith,progresBarPorcent[progresBarPorcent.indexOf(progresBarWith)+1]); 
        }
    }else if(simbol==="-"){
        if(progresBarWith!=progresBarPorcent[0]){
            aux=-1;
            progressBar.classList.replace(progresBarWith,progresBarPorcent[progresBarPorcent.indexOf(progresBarWith)-1]);
        }
    }
    texts.forEach(element => {
        let font=window.getComputedStyle(element).fontSize;
        font=parseInt(font.substr(0,font.length-2));
        element.style.fontSize=(font+aux)+'px';
    });
}

let score=0;
let testCount=0;
function test(){
    let answers=[8,12,74,16,2,6,29,7,45,5];
    let userAnswer=document.querySelector("#answerTest").value;
    userAnswer.value="";
    if(answers[testCount]==userAnswer) score++;
    testCount++;
    if(testCount!=10){
        document.querySelector('#imgTest').setAttribute('src','img/test'+(testCount+1)+'.jpg');    
        document.querySelector("#nQuestion").innerText=(testCount+1);
    }else{
        endTest();
    }
}

function endTest(){
    document.querySelector("#imgTestcontainer").style.display="none";
    document.querySelector("#infoTest").style.display="none";
    document.querySelector("#nQuestionContainer").style.display="none";
    document.querySelector("#testResults").style.display="flex";
    document.querySelector("#result").innerText=score;
    if(score>=0 && score<5){
        document.querySelector("#infoResult").innerText="Padeces algún tipo de daltonismo severo";
    }else if(score>=5 && score<=7){
        document.querySelector("#infoResult").innerText="Padeces algún tipo de daltonismo leve";
    }else{
        document.querySelector("#infoResult").innerText="¡Enhorabuena! Tienes una vista perfecta";
    }
}

function restartTest(){
    document.querySelector("#imgTestcontainer").style.display="flex";
    document.querySelector("#infoTest").style.display="flex";
    document.querySelector("#nQuestionContainer").style.display="block";
    document.querySelector("#testResults").style.display="none";
    score=0;
    testCount=0;
    document.querySelector('#imgTest').setAttribute('src','img/test1.jpg');   
}

function formCheck(){
    let tlf=document.querySelector("#tlf").value;
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let textarea=document.querySelector("#textarea").value;
    let error=document.querySelectorAll(".errorContainer");
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    error[0].style.display=(name==='' ? 'flex' : 'none');
    error[1].style.display=(tlf==="" || tlf.length!=9 || isNaN(tlf) ? 'flex' : 'none');
    error[2].style.display=(regex.test(email)===false ? 'flex' : 'none');;
    error[3].style.display=(textarea==='' ? 'flex' : 'none');
}

function mobileMenu(){
    if(document.querySelector('#cabecera').style.height=='80px'){
        document.querySelector('#cabecera').style.height='40px';
    }else{
        document.querySelector('#cabecera').style.height='80px';
    }
    
}

if(screen.width<=800){
    document.querySelector('#accesibilityMenu').classList.add('displayOff');
    document.querySelector('#accesibilityIcon').classList.replace('displayOff','displayOnIcon');
}
function showAccesibilityMenu(){
    document.querySelector('#accesibilityMenu').classList.replace('displayOff','displayOn');
    document.querySelector('#accesibilityIcon').classList.replace('displayOnIcon','displayOff');
}
function hiddeAccesibilityMenu(){
    document.querySelector('#accesibilityMenu').classList.replace('displayOn','displayOff');
    document.querySelector('#accesibilityIcon').classList.replace('displayOff','displayOnIcon');
}