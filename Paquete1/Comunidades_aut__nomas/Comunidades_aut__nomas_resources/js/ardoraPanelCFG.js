//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=17; attempts=0; attemptsMax=1;
var score=0; scoreMax=17; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[147,26,209,257,229,176,289,344,396,321,-17,33,139,77,142,151,244]; var posY=[292,193,198,254,176,141,97,81,175,371,43,-3,89,21,65,24,51];
var coorx=["MTQy", "OTQ=", "MjA0", "MjUy", "Mjcz", "MTcx", "Mjg0", "MzM5", "Mzkx", "MzE2", "NDI=", "OTk=", "MTM0", "MTYy", "MjAw", "MjEz", "MjM5"]; var coory=["Mjky", "MTk2", "MTk4", "MjU0", "MTc3", "MTQx", "OTc=", "ODE=", "MTc1", "Mzcx", "MzU=", "MjE=", "ODk=", "Mjg=", "NjM=", "NDI=", "NTE="]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Andalucía", "Extremadura", "Castilla la mancha", "Región de Murcia", "Comunidad valenciana", "Comunidad de Madrid", "Aragón", "Cataluña", "Islas baleares", "Islas canarias", "Galicia", "Principado de Asturias", "Castilla y león", "Cantabria", "La Rioja", "País vasco", "Navarra"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q29tdW5pZGFkZXNfYXV0X19ub21hcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
