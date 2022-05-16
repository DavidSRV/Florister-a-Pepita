let Usuario = document.getElementById("usuario");
let Contraseña = document.getElementById("contraseña");



let ListaUsuariosValidados = [{
    user: "Pikachu",
    password: "pikachu1234"
},
{
    user: "Bulbasaur",
    password: "bulbasaur1234"
}];

function ValidacionUsers(){

    const found = ListaUsuariosValidados.find(Usuarios => Usuarios.user == Usuario.value && Usuarios.password == Contraseña.value)


    if (found) {
        alert(`Bienvenido ${Usuario.value}`);
        window.open("/Páginas/Flores.html");
    } else {
        alert(`Ingrese un Usuario o contraseña correcto`);
    }
}




