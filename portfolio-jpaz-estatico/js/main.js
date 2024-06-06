const titulo = document.querySelector('h1');
const parrafo = document.querySelectorAll("p");

let mensajes = ["Me encuentro creando nuevo contenido para mi sitio web.","Nos vemos pronto."]

titulo.textContent = `Disculpe las molestias`;

let i = 0;

parrafo.forEach((p)=>{
    p.textContent = mensajes[i++];
})
