//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=5;
var successes=0; successesMax=19; attempts=0; attemptsMax=1;
var score=0; scoreMax=19; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#E9F409"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo has logrado con éxito"; messageTime="Lo lamento, se ha acabado el tiempo"; messageError="Lo lamento, a ocurrido un problema"; messageAttempts="Número de intestos hechos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[196,280,312,527,450,427,267,257,344,332,431,340,383,404,376,288,366,84,547]; var posY=[47,35,105,111,194,256,280,217,155,180,103,31,74,56,55,342,368,349,186];
var coorx=["MTkx", "Mjc1", "MzA3", "NTIy", "NDQ1", "NDIy", "MjYy", "MjUy", "MzM5", "MzI3", "NDI2", "MzM1", "Mzc4", "Mzk5", "Mzcx", "Mjgz", "MzYx", "Nzk=", "NTQy"]; var coory=["NDc=", "MzU=", "MTA1", "MTEx", "MTk0", "MjU2", "Mjgw", "MjE3", "MTU1", "MTgw", "MTAz", "MzE=", "NzQ=", "NTY=", "NTU=", "MzQy", "MzY4", "MzQ5", "MTg2"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Galicia", "P. Asturias", "Castilla y León", "Cataluña", "C. Valenciana", "Murcia", "Andalucía", "Extremadura", "Madrid", "Castilla y la Mancha", "Aragón", "Cantabria", "La Rioja", "Navarra", "País Vasco", "Ceuta", "Melilla", "Islas Canarias", "Islas Baleares"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q29tdW5pZGFkZXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
