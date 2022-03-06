//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=5; scoreDec=3;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Exelente"; messageTime="Se te acabo el tiempo"; messageError="Suerte para la proxima"; messageErrorG="Suerte para la proxima"; messageAttempts="No tienes mas intentos "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="ZGl2aXNpb25fcG9saXRpY2Ex"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Qw==","QQ==","Uw==","VA==","SQ==","TA==","TA==","QQ==","WQ==","TA==","RQ==","Tw==","Tg==","UA==","Ug=="],["","Tg==","","","","","","Ug==","","","WA==","","","QQ==","RQ=="],["","RA==","","","","","","QQ==","","","VA==","","","SQ==","Rw=="],["Rw==","QQ==","TA==","SQ==","Qw==","SQ==","QQ==","Rw==","","","Ug==","","","Uw==","SQ=="],["","TA==","","","","","","Tw==","","","RQ==","","","Vg==","Tw=="],["","VQ==","","","","","","Tg==","","","TQ==","","","QQ==","Tg=="],["","Qw==","","","","","TA==","Og==","","","QQ==","","","Uw==","RA=="],["","SQ==","","","Tg==","","QQ==","","","Qw==","RA==","","","Qw==","RQ=="],["Qw==","QQ==","Tg==","VA==","QQ==","Qg==","Ug==","SQ==","Qw==","QQ==","VQ==","","","Tw==","TQ=="],["","","","","Vg==","","SQ==","","","VA==","Ug==","","","","VQ=="],["","","","","QQ==","","Tw==","","","QQ==","QQ==","","","","Ug=="],["","","","","Ug==","","Sg==","","","TA==","","","","","Qw=="],["","","","","Ug==","","QQ==","","","VQ==","","","","","SQ=="],["","","","","QQ==","","","","","w5E=","","","","","QQ=="],["","","","","","","","","","QQ==","","","","",""]];
var x1=[];
var y1=[];
var x2=[];
var y2=[];
var imaCW=[];
var audioCW=[];
var defCW=[];
var colNum=15;
var rowNum=15;
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
