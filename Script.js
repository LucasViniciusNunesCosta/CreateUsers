function NewUser() {
    var nome = document.getElementById("nomecompleto").value;

    var usuario = nome.split(" ");

    //gerando user
    var lastname = usuario[usuario.length - 1].substring(0, 5);
    
    if (lastname == "") {
        lastname = usuario[usuario.length - 2].substring(0, 5);
    }

    var firstname = usuario[0].substring(0, 1);
    var secondname = usuario[1].substring(0, 1);

    let verify = usuario[1].toUpperCase();
    if ((verify == "DE") || (verify == "DA") || (verify == "DOS") || (verify == "DAS")) {
        var secondname = usuario[2].substring(0, 1);
    }
    var user = (lastname + firstname + secondname).toUpperCase();

    //gerando senha
    var pass = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    //adicionando novas linhas
    const tbody = document.getElementById("registros");
    const linha = document.createElement("tr");
    const coluna1 = document.createElement("td");
    const coluna2 = document.createElement("td");
    const coluna3 = document.createElement("td");

    tbody.appendChild(linha);

    linha.appendChild(coluna1);
    coluna1.innerText = nome;
    linha.appendChild(coluna2);
    coluna2.innerText = user;
    linha.appendChild(coluna3);
    coluna3.innerText = pass.toUpperCase();

    document.getElementById("nomecompleto").value = "";
}

function NewUserSL() {
    var nome = document.getElementById("nomecompleto").value;

    var usuario = nome.split(" ");

    //gerando user
    var lastname = usuario[usuario.length - 1].substring(0, 5);

    if (lastname == "") {
        lastname = usuario[usuario.length - 2].substring(0, 5);
    }

    var firstname = usuario[0].substring(0, 1);
    var secondname = usuario[1].substring(0, 1);

    let verify = usuario[1].toUpperCase();
    if ((verify == "DE") || (verify == "DA") || (verify == "DOS") || (verify == "DAS") || (verify == "DO")) {
        var secondname = usuario[2].substring(0, 1);
    }
    var user = ("SL" + lastname + firstname + secondname).toUpperCase();

    //adicionando novas linhas
    const tbody = document.getElementById("registros");
    const linha = document.createElement("tr");
    const coluna1 = document.createElement("td");
    const coluna2 = document.createElement("td");

    tbody.appendChild(linha);

    linha.appendChild(coluna1);
    coluna1.innerText = nome;
    linha.appendChild(coluna2);
    coluna2.innerText = user;

    document.getElementById("nomecompleto").value = "";
}