
//dichiarazione variabili
var f1=$("#frame1");    
var f2=$("#frame2");
var f3=$("#frame3");
var f4=$("#frame4");
var btn=$("#btn");
var btn2=$("#btn2");
var btn3=$("#btn3");
var btn4=$("#btn4");
var posin=parseInt(f1.css("left"));
var pos=posin;
var pos2=posin;
var pos3=posin;
var pos4=posin;
var spu=$("#spunta");
var spu2=$("#spunta2");
var spu3=$("#spunta3");
var spu4=$("#spunta4");
var cless=$("#clessidra");
var cless2=$("#clessidra2");
var cless3=$("#clessidra3");
var cless4=$("#clessidra4");
var intervallof1;
var intervallof2;
var intervallof3;
var intervallof4;
var frame=false;
var frame2=false;
var frame3=false;
var frame4=false;
var secondaf2=false;
var secondaf3=false;
var secondaf4=false;

$("document").ready(function(){     //gestione eventi click sui bottoni
    

    btn.click(spostaf1);
    btn2.click(spostaf2);
    btn3.click(spostaf3);
    btn4.click(spostaf4);

});

//funzioni per prima animazione
function spostaf1(){

    btn.prop("disabled",true);
    pos=posin;
    
    cless.attr("src","img/hourglass.gif");

    if(frame) f1.attr("src","img/frame1.png");
    else f1.attr("src","img/frame0.png");
    
    intervallof1=setInterval(muovi, 15);
}

function muovi(){
    pos=pos+5;
    f1.css("left",pos + 'px');
    
    if(pos>= (   parseInt($(window).width() *0.70)   )){
        
        clearInterval(intervallof1);
        setTimeout(spunta, 500);
          
    }
}

function spunta(){
    f1.hide();
    spu.attr("src","img/spunta.gif");
    setTimeout(mandaAck,500);

}

function mandaAck (){
    spu.attr("src","");
    f1.attr("src","img/ack.png");
    f1.show();
    intervallof1=setInterval(muoviRovescio, 15);

}

function muoviRovescio(){
    pos=pos-5;
    f1.css("left",pos + 'px');
    if(pos<= (   posin  )){
        
        clearInterval(intervallof1);

        cless.attr("src","");
        f1.attr("src","");
        btn.prop("disabled",false);
        frame=!frame;
        
    }
}

//funzioni per seconda animazione
function spostaf2(){

    btn2.prop("disabled",true);
    
    cless2.attr("src","img/hourglass.gif");

    if(frame2) f2.attr("src","img/frame1.png");
    else f2.attr("src","img/frame0.png");
    
    intervallof2=setInterval(muovif2, 15);
}

function muovif2(){
    pos2=pos2+5;
    f2.css("left",pos2 + 'px');

    if(!secondaf2){

        if(pos2>= (   parseInt($(window).width() *0.45)   )){
        
        clearInterval(intervallof2);
        setTimeout(persof2, 100);
          
        }
    }
    else{

        if(pos2>= (   parseInt($(window).width() *0.70)   )){
        
            clearInterval(intervallof2);
            secondaf2=!secondaf2;
            setTimeout(spunta2, 500);
              
        }

    }
    
    
}

function persof2(){
    f2.attr("src","img/cross.png");
    secondaf2=!secondaf2;

    setTimeout(tempoOutF2, 500);

}

function tempoOutF2(){
    f2.attr("src","");
    pos2=posin;
    f2.css("left",pos2 + 'px');
    setTimeout(fineClessF2, 2000);
}

function fineClessF2(){
    cless2.attr("src","img/alarm.gif");
    setTimeout(spostaf2, 1000);
}

function spunta2(){
    f2.hide();
    spu2.attr("src","img/spunta.gif");
    setTimeout(mandaAck2,500);

}

function mandaAck2 (){
    spu2.attr("src","");
    f2.attr("src","img/ack.png");
    f2.show();
    intervallof2=setInterval(muoviRovescio2, 15);

}

function muoviRovescio2(){
    pos2=pos2-5;
    f2.css("left",pos2 + 'px');
    if(pos2<= (   posin  )){
        
        clearInterval(intervallof2);

        cless2.attr("src","");
        f2.attr("src","");
        btn2.prop("disabled",false);
        frame2=!frame2;
        
    }
}

//funzioni per terza animazione
function spostaf3(){

    btn3.prop("disabled",true);
    pos3=posin;
    
    cless3.attr("src","img/hourglass.gif");

    if(frame3) f3.attr("src","img/frame1.png");
    else f3.attr("src","img/frame0.png");
    
    intervallof3=setInterval(muovi3, 15);
}

function muovi3(){
    pos3=pos3+5;
    f3.css("left",pos3 + 'px');
    
    if(pos3>= (   parseInt($(window).width() *0.70)   )){
        
        clearInterval(intervallof3);
        setTimeout(spunta3, 500);
          
    }
}

function spunta3(){
    f3.hide();
    if(secondaf3){
        spu3.attr("src","img/spunta.gif");
        secondaf3=!secondaf3;
        frame3=!frame3;
        setTimeout(mandaAck3,500);
    }
    else{
        spu3.attr("src","img/cross.png");
        setTimeout(mandaNack3,500);

    }
}

function mandaAck3 (){
    spu3.attr("src","");
    f3.attr("src","img/ack.png");
    f3.show();
    intervallof3=setInterval(muoviRovescio3, 15);

}

function muoviRovescio3(){
    pos3=pos3-5;
    var secondavolta=false;
    f3.css("left",pos3 + 'px');
    if(pos3<= (   posin  )){
        
        if(f3.attr("src")=="img/nack.png") secondavolta=true;
        clearInterval(intervallof3);
        cless3.attr("src","");
        f3.attr("src","");
        
        
        if(secondavolta){
            secondavolta=false;
            secondaf3=!secondaf3;
            setTimeout(spostaf3, 500);
        } 
        else btn3.prop("disabled",false);
    }
    
}

function mandaNack3 (){
    spu3.attr("src","");
    f3.attr("src","img/nack.png");
    f3.show();
    intervallof3=setInterval(muoviRovescio3, 15);

}

//funzioni per quarta animazione
function spostaf4(){

    btn4.prop("disabled",true);
    pos4=posin;
    cless4.attr("src","img/hourglass.gif");

    if(frame4) f4.attr("src","img/frame1.png");
    else f4.attr("src","img/frame0.png");
    
    intervallof4=setInterval(muovi4, 15);
}

function muovi4(){
    pos4=pos4+5;
    f4.css("left",pos4 + 'px');
    
    if(pos4>= (   parseInt($(window).width() *0.70)   )){
        
        clearInterval(intervallof4);
        setTimeout(spunta4, 500);
          
    }
}

function spunta4(){
    f4.hide();
    spu4.attr("src","img/spunta.gif");
    setTimeout(mandaAck4,500);

}

function mandaAck4 (){
    spu4.attr("src","");
    f4.attr("src","img/ack.png");
    f4.show();
    intervallof4=setInterval(muoviRovescio4, 15);

}

function muoviRovescio4(){
    pos4=pos4-5;
    f4.css("left",pos4 + 'px');

    if(!secondaf4){

        if(pos4<= (   parseInt($(window).width() *0.45)   )){
        
            clearInterval(intervallof4);
            setTimeout(persof4, 100);
          
        }
    }
    else{

        if(pos4<= (   posin  )){
        
            clearInterval(intervallof4);
            secondaf4=!secondaf4;
            cless4.attr("src","");
            f4.attr("src","");
            btn4.prop("disabled",false);
            frame4=!frame4;
        }

    }
}

function persof4(){
    f4.attr("src","img/cross.png");
    secondaf4=!secondaf4;
    setTimeout(tempoOutF4, 500);

}

function tempoOutF4(){
    f4.attr("src","");
    pos4=parseInt($(window).width() *0.70) ;
    f4.css("left",pos4 + 'px');
    setTimeout(fineClessF4, 2000);
}

function fineClessF4(){
    cless4.attr("src","img/alarm.gif");
    setTimeout(spostaf4, 1000);
}

$("#freccia").on("click", function() {
    var i = $(this).find("i");
    if (i.hasClass("up")) {//controlla se ha quella classe
      document.getElementById("mySidenav").style.bottom = "0";
      i.removeClass("up").addClass("down");
    } else {
      document.getElementById("mySidenav").style.bottom = "-100%";
      i.removeClass("down").addClass("up");
    }
  });

    var errori = document.getElementsByClassName("error");
    var uno = document.getElementsByName('radio1');
    var due = document.getElementsByName('radio2');
    var tre = document.getElementsByName('radio3');
    var quattro = document.getElementsByName('radio4');
    var cinque = document.getElementsByName('radio5');
    var sei = document.getElementsByName('radio6');
    var sette = document.getElementsByName('radio7');
    var otto = document.getElementsByName('radio8');
    var nove = document.getElementsByName('radio9');
    var dieci = document.getElementsByName('radio10');
  $("#btn5").on("click", function() {
    for(let i=0;i<errori.length;i++){
		errori[i].innerHTML ="";
	}
	var Nerrori = 0;

    $("#dieci").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(dieci)){
        $("#dieci").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[9].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#10opz1").focus();
    }
    else if(!dieci[1].checked){
        //$("#dieci").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[9].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#10opz1").focus();
    }

    $("#nove").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(nove)){
        $("#nove").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
		errori[8].innerHTML = "Non hai selezionato nessuna risposta!";
		Nerrori++;
        $("#9opz1").focus();
	}
    else if(!nove[0].checked){
        //$("#nove").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[8].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#9opz1").focus();
    }

    $("#otto").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");

    if(!check(otto)){
        $("#otto").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[7].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#8opz1").focus();
    }
    else if(!otto[0].checked){
        //$("#otto").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[7].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#8opz1").focus();
    }

    $("#sette").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(sette)){
        $("#sette").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[6].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#7opz1").focus();
    }
    else if(!sette[1].checked){
        //$("#sette").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[6].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#7opz1").focus();
    }

    $("#sei").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(sei)){
        $("#sei").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[5].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#6opz1").focus();
    }
    else if(!sei[1].checked){
        //$("#sei").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[5].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#6opz1").focus();
    }

    $("#cinque").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(cinque)){
        $("#cinque").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[4].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#5opz1").focus();
    }
    else if(!cinque[1].checked){
        //$("#cinque").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[4].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#5opz1").focus();
    }

    $("#quattro").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(quattro)){
        $("#quattro").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[3].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#4opz1").focus();
    }
    else if(!quattro[1].checked){
        //$("#quattro").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[3].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#4opz1").focus();
    }

    $("#tre").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(tre)){
        $("#tre").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[2].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#3opz1").focus();
    }
    else if(!tre[1].checked){
        //$("#tre").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[2].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#3opz1").focus();
    }

    $("#due").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(due)){
        $("#due").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[1].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#2opz1").focus();
    }
    else if(!due[0].checked){
        //$("#due").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[1].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#2opz1").focus();
    }

    $("#uno").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    if(!check(uno)){
        $("#uno").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[0].innerHTML = "Non hai selezionato nessuna risposta!";
        Nerrori++;
        $("#opz1").focus();
    }
    else if(!uno[0].checked){
        //$("#uno").css("box-shadow", "0 0 10px rgba(255, 0, 0, 0.5)");
        errori[0].innerHTML = "Hai selezionato una risposta sbagliata!";
        Nerrori++;
        //$("#opz1").focus();
    }

    $("#punti").html((10-Nerrori)+"/10");

    if(Nerrori == 0){
		alert("Complimenti! Hai risposto correttamente a tutte le domande!");
	}
    
	


  });

  //funzione per resettare il quiz
    $("#btn6").on("click", function() {
        for(let i=0;i<errori.length;i++){
            errori[i].innerHTML ="";
        }
        $("input[type=radio]").prop("checked", false);
        $("#uno").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#due").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#tre").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#quattro").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#cinque").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#sei").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#sette").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#otto").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#nove").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
        $("#dieci").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.5)");
    
    });

  //controllo sezione esistenza
  function check(x){
    for(let w=0;w<(x.length);w++)
        if(x[w].checked){
             return true;
             break;
        }

    return false;
}