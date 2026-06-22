let inicio = new Date("2025-12-01T00:00:00");



// TEXTO DA ENTRADA

escrever(
"entradaTexto",
"Eu fiz algo especial para você... ❤️\n\n🔊 obs: aumenta o volume"
);





function abrirSite(){


document.getElementById("entrada").style.display="none";


document.getElementById("header").style.display="flex";


document.getElementById("site").style.display="block";


document.getElementById("audio").play();


}








function contador(){


let agora=new Date();


let anos=agora.getFullYear()-inicio.getFullYear();


let meses=agora.getMonth()-inicio.getMonth();


let dias=agora.getDate()-inicio.getDate();





if(dias<0){

meses--;

dias+=new Date(
agora.getFullYear(),
agora.getMonth(),
0
).getDate();

}




if(meses<0){

anos--;

meses+=12;

}






let tempo=agora-inicio;



let horas=Math.floor((tempo/3600000)%24);


let minutos=Math.floor((tempo/60000)%60);


let segundos=Math.floor((tempo/1000)%60);





anosEl.innerHTML=anos;


mesesEl.innerHTML=meses;


diasEl.innerHTML=dias;


horasEl.innerHTML=horas;


minutosEl.innerHTML=minutos;


segundosEl.innerHTML=segundos;


}





let anosEl=document.getElementById("anos");

let mesesEl=document.getElementById("meses");

let diasEl=document.getElementById("dias");

let horasEl=document.getElementById("horas");

let minutosEl=document.getElementById("minutos");

let segundosEl=document.getElementById("segundos");





setInterval(contador,1000);









// MAQUINA DE ESCREVER


function escrever(id,texto){


let i=0;


let elemento=document.getElementById(id);



if(!elemento) return;



elemento.innerHTML="";




function digitar(){


if(i < texto.length){



if(texto[i] === "\n"){


elemento.innerHTML += "<br>";



}else{


elemento.innerHTML += texto[i];


}




i++;


setTimeout(digitar,45);


}



}



digitar();


}









// TEXTO PRINCIPAL


escrever(
"texto",
"Eu não sei quando aconteceu, mas aos poucos você foi ficando alguém especial. Seu jeito fofo, engraçado e essa energia incrível fizeram eu reparar em você ❤️"
);









let tocando=true;



function musica(){


let audio=document.getElementById("audio");


let botao=document.getElementById("botao");





if(tocando){


audio.pause();


botao.innerHTML="▶";



}else{


audio.play();


botao.innerHTML="⏸";


}



tocando=!tocando;



}









function abrirFinal(){


document.getElementById("mensagemFinal").style.display="block";



escrever(
"finalTexto",
"Wenndy, eu fiz isso para você guardar um pedacinho do carinho que eu sinto. Obrigado por ser essa pessoa incrível. Espero continuar vendo seu sorriso por muito tempo ❤️ \nEu te Amo❤️"
);



}











// CORAÇÕES CAINDO


setInterval(()=>{


let c=document.createElement("div");


c.className="coracao";


c.innerHTML="❤️";



c.style.left=Math.random()*100+"vw";



c.style.fontSize=Math.random()*30+15+"px";



c.style.animationDuration=Math.random()*3+4+"s";



document.body.appendChild(c);





setTimeout(()=>{


c.remove();



},7000);





},300);