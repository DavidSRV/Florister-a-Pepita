let ListaFlores = document.getElementById("ListaFlores");

const PRODUCTOS=["Rosas","Tulipanes","Claveles","Gerbera","Orquídeas","Lilis","Alcatraces","Gladiolo"];


for(let i = 0; i < PRODUCTOS.length; i++) {
    const flores = PRODUCTOS[i];
    var li = document.createElement("li");
    li.textContent = flores;
    ListaFlores.appendChild(li);
}