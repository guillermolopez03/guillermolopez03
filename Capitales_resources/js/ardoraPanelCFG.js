//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=5;
var successes=0; successesMax=18; attempts=0; attemptsMax=5;
var score=0; scoreMax=18; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien hecho"; messageTime="Lo lamento se ah acabado el tiempo"; messageError="Vuelve a intentarlo"; messageAttempts="Número de intentos permitidos completados"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[196,280,311,344,526,431,383,257,268,427,342,375,450,547,288,368,113,83]; var posY=[49,34,105,157,111,104,71,214,280,257,29,55,194,186,341,367,365,349];
var coorx=["MTkx", "Mjc1", "MzA2", "MzM5", "NTIx", "NDI2", "Mzc4", "MjUy", "MjYz", "NDIy", "MzM3", "Mzcw", "NDQ1", "NTQy", "Mjgz", "MzYz", "MTA4", "Nzg="]; var coory=["NDk=", "MzQ=", "MTA1", "MTU3", "MTEx", "MTA0", "NzE=", "MjE0", "Mjgw", "MjU3", "Mjk=", "NTU=", "MTk0", "MTg2", "MzQx", "MzY3", "MzY1", "MzQ5"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Santiago de Compostela", "Oviedo", "Valladolid", "Madrid", "Barcelona", "Zaragoza", "Logroño", "Mérida", "Sevilla", "Murcia", "Santander", "Vitoria Gasteiz", "Valencia", "Palma de Mallorca", "C. Ceuta", "C. Melilla", "Las Palmas de Gran Canaria", "Santa Cruz de Tenerife"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q2FwaXRhbGVz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
