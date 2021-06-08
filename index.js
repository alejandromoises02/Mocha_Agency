let contenedor = document.getElementById("contenedor_main");

const goEng = () => {
    let español = document.getElementById("español");
    let garbage = contenedor.removeChild(español);
    contenedor.innerHTML = eng;
}

const goEsp = () => {
    let ingles = document.getElementById("ingles");
    let garbage = contenedor.removeChild(ingles);
    contenedor.innerHTML = esp;
}

const menu = () => {
    let backmenu = document.getElementById("backmenu");
    let contenedorMF = document.getElementById("container_manu_front");
    let garbage = backmenu.removeChild(contenedorMF);
    backmenu.innerHTML = menuMEsp;

    let h = parseInt(screen.height) - 58;
    backmenu.style.setProperty("height", `${h}px`);
}



const formulario = () => {
    const nombre = document.getElementById("form_nombre").value;
    const email = document.getElementById("form_email").value;
    const servicios = document.getElementById("form_servicios").value;
    const texto = document.getElementById("form_texto").value;
    const emailNewsletter = document.getElementById("emailNewsletter").value;

    db.doc().set({
        nombre: nombre,
        email: email,
        servicios: servicios,
        texto: texto,
        Newsletter:emailNewsletter
    }).then(() => {
        console.log("data enviada");
    }).catch((e) => {
        console.log(e);
    })

    document.getElementById("form_nombre").value = "";
    document.getElementById("form_email").value = "";
    document.getElementById("form_texto").value = "";
}

const formularioM = () => {
    const nombre = document.getElementById("form_nombreM").value;
    const email = document.getElementById("form_emailM").value;
    const servicios = document.getElementById("form_serviciosM").value;
    const texto = document.getElementById("form_textoM").value;
    const emailNewsletter = document.getElementById("emailNewsletterM").value;

    db.doc().set({
        nombre: nombre,
        email: email,
        servicios: servicios,
        texto: texto,
        Newsletter:emailNewsletter
    }).then(() => {
        console.log("data enviada");
    }).catch((e) => {
        console.log(e);
    })

    document.getElementById("form_nombreM").value = "";
    document.getElementById("form_emailM").value = "";
    document.getElementById("form_textoM").value = "";
}
