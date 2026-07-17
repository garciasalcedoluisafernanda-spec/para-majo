const fotos = [
    "fotos/foto1.jpeg",
    "fotos/foto2.jpeg",
    "fotos/foto3.jpeg",
    "fotos/foto4.jpeg",
    "fotos/foto5.jpeg",
    "fotos/foto6.jpeg",
    "fotos/foto7.jpeg",
    "fotos/foto8.jpeg",
    "fotos/foto9.jpeg"
];

const frases = [
    "Aquí empezó una de las historias más bonitas de mi vida ❤️",
    "Tus besos siempre serán mi lugar favorito.",
    "Contigo aprendí lo que realmente significa amar.",
    "Gracias por hacerme feliz todos los días.",
    "Mi mejor amiga, mi paz y mi persona favorita.",
    "Cada recuerdo contigo vale un mundo entero.",
    "Sueño con nuestro futuro juntos y con Mailo 🐶",
    "Eres el hogar que nunca supe que necesitaba.",
    "Te amo muchísimo, Majo. Gracias por existir. ❤️"
];

let actual = 0;

const inicio = document.getElementById("inicio");
const galeria = document.getElementById("galeria");
const foto = document.getElementById("foto");
const frase = document.getElementById("frase");

document.getElementById("empezar").onclick = () => {
    inicio.classList.add("oculto");
    galeria.classList.remove("oculto");

    foto.src = fotos[0];
    frase.textContent = frases[0];
};

document.getElementById("siguiente").onclick = () => {
    actual++;

    if (actual >= fotos.length) {

document.body.innerHTML = `

<div class="pantalla">

<h1>❤️ Han pasado...</h1>

<h2 id="dias" style="font-size:90px;color:#ff4f94;">0</h2>

<p>

desde que empezó nuestra historia.

<br><br>

15 de abril de 2026

<br><br>

Y volvería a elegirte...

<br>

una y mil veces más.

</p>

<button id="continuarCarta">

Continuar ❤️

</button>

</div>

`;

const inicioRelacion = new Date("2026-04-15");

const hoy = new Date();

const diferencia = hoy - inicioRelacion;

const dias = Math.floor(diferencia / (1000*60*60*24));

document.getElementById("dias").textContent = dias;

document.getElementById("continuarCarta").onclick = mostrarCarta;

return;

}

    foto.src = fotos[actual];
    frase.textContent = frases[actual];
};
function mostrarCarta(){

document.body.innerHTML = `

<div class="pantalla">

<h1>💌 Para ti, mi Chiqui</h1>

<p id="carta" style="max-width:700px;font-size:22px;line-height:1.8;"></p>

<button id="final">

Te amo ❤️

</button>

</div>

`;

const texto = `

Majo...

Desde que llegaste a mi vida entendí que el amor sí existe.

Tus besitos calientitos siempre serán mi lugar favorito.

Gracias por ser mi mejor amiga.

Gracias por hacerme sentir en casa.

Sueño con vivir contigo...

con nuestro perrito Mailo...

y seguir construyendo esta historia contigo.

Te amo con todo mi corazón.

Feliz 3 meses, mi Chiqui. ❤️

`;

let i = 0;

const escribir = setInterval(()=>{

document.getElementById("carta").textContent += texto.charAt(i);

i++;

if(i>=texto.length){

clearInterval(escribir);

}

},35);

document.getElementById("final").onclick = finalRomantico;

}

function finalRomantico(){

document.body.innerHTML = `

<div class="pantalla">

<h1>❤️</h1>

<h2>

¿Quieres seguir escribiendo esta historia conmigo?

</h2>

<br>

<button id="si">

Sí, toda la vida ❤️

</button>

<br><br>

<button id="no">

No 😅

</button>

</div>

`;

const no=document.getElementById("no");

no.onmouseover=()=>{

no.style.position="absolute";

no.style.left=Math.random()*80+"%";

no.style.top=Math.random()*80+"%";

}

document.getElementById("si").onclick=()=>{

document.body.innerHTML=`

<div class="pantalla">

<h1 style="font-size:80px;">

❤️

</h1>

<h2>

Sabía que dirías que sí.

</h2>

<p>

Te amo muchísimo, mi Chiqui.

Gracias por estos 3 meses.

Y que sean millones más.

✨

</p>

</div>

`;

}

}