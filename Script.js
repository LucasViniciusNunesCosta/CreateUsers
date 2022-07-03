function NewUser() {
    var nome = document.getElementById("nomecompleto").value;

    var usuario = nome.split(" ");

    //gerando user
    var lastname = usuario[usuario.length - 1].substring(0, 5);
    var firstname = usuario[0].substring(0, 1);
    var secondname = usuario[1].substring(0, 1);
    if (usuario[1].toUpperCase() == "DE") {
        var secondname = usuario[2].substring(0, 1);
    }
    var user = (lastname + firstname + secondname).toUpperCase();

    //gerando senha
    var pass = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    //escrevendo na tela
    var nomecompleto = document.getElementById("nomeComp").innerHTML;
    nomecompleto = nomecompleto + "<ul>" + nome + "</ul>";
    document.getElementById("nomeComp").innerHTML = nomecompleto;

    var listauser = document.getElementById("user").innerHTML;
    listauser = listauser + "<ul>" + user + "</ul>";
    document.getElementById("user").innerHTML = listauser;

    var listapass = document.getElementById("pass").innerHTML;
    listapass = listapass + "<ul>" + pass.toUpperCase() + "</ul>";
    document.getElementById("pass").innerHTML = listapass;

    document.getElementById("nomecompleto").value = "";
}