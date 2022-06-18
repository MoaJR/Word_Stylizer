const bancoFonts = [
    "'Amatic SC', cursive",
    "'Fascinate', cursive",
    "'Fascinate Inline', cursive",
    "'Gloria Hallelujah', cursive",
    "'Great Vibes', cursive",
    "'League Gothic', sans-serif",
    "'Pacifico', cursive",
    "'Permanent Marker', cursive",
    "'Rajdhani', sans-serif",
    "'Shadows Into Light', cursive"
    ];
    
const btnGerar = document.querySelector(".btnGerar");
const btnOrientacao = document.querySelector(".btnOrientacao");
const input = document.querySelector("input");
let display = document.querySelector(".display");
let idDisplay = document.querySelector("#display");
const idDisplayClass = idDisplay.classList;

let fraseArray = [];

btnGerar.addEventListener('click', function(){
    if(!display == ""){
        display.innerHTML = "";
    }
    let fraseDigitada = input.value;
    fraseArray = fraseDigitada.split(" ");
    escreveFrase(fraseArray);
})

btnOrientacao.addEventListener('click', function(){
    idDisplayClass.toggle("display2");
});

function escreveFrase(frase){
    for(let i in frase){
        let p = document.createElement('p');

        /*--------------- estilos random ---------------*/
        p.innerHTML = frase[i]+"&nbsp";
        p.style.fontFamily = customFont();
        p.style.color = colorRandom();
        p.style.fontSize = sizeRandom();

        /*--------------- append ---------------*/
        display.appendChild(p);
    }
}

function customFont(){
    let rnd = Math.floor(Math.random()*bancoFonts.length)
    return bancoFonts[rnd];
}

function colorRandom(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`
}

function sizeRandom(){
    let size = Math.floor(Math.random()*70 + 70);
    return `${size}%`;
}