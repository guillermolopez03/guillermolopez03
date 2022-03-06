//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=5;
var successes=0; successesMax=7; attempts=0; attemptsMax=0;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones, muy bien hecho"; messageTime="Losiento, se ha terminado el tiempo"; messageError="Incorrecto"; messageAttempts="Máximo de intentos hechos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0"];
var posX=[342,104,78,281,36,256,284]; var posY=[167,69,110,145,147,211,190];
var coorx=["MzM3", "OTk=", "NzM=", "Mjc2", "MzE=", "MjUx", "Mjc5"]; var coory=["MTY3", "Njk=", "MTEw", "MTQ1", "MTQ3", "MjEx", "MTkw"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", ""]; answers=["Meseta", "Montaña", "Cordillera", "Valle", "Colina", "Llanura", "Depresión"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UmVsaWV2ZV90ZXJyZXN0cmU="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
