// Nome, email, idade, cidade, foto e senha
async function carregarDados(){
    let response = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json')
    let data = await response.json()
    let dados = data.alunos

    console.log(dados)

    localStorage.setItem('usuarios',JSON.stringify(dados))
}

if(localStorage.getItem('usuarios') === null){
    carregarDados()
}




let container = document.getElementById('container')


let botaoRegistrar = document.getElementById("botao-registro");

if (botaoRegistrar) {
    botaoRegistrar.addEventListener("click", () => {
        let usuario = document.getElementById("usuario").value;

        let email = document.getElementById("email").value;

        let idade = document.getElementById("idade").value;

        let cidade = document.getElementById("cidade").value;

        let foto = document.getElementById("foto").value;

        let senha = document.getElementById("senha").value;

        const camposVazios = usuario === "" || email === "" || cidade === "" || foto === "" || senha === "" || idade ==="";

/////////////////////////////////////////
/*
    Seguinte, consegui fazer a verificação de email existente, 
    mas quebrei o registro de novos usuarios.
*/        
        const usuarios_v = JSON.parse(localStorage.getItem('usuarios')) || []
        const procurarEmail = usuarios_v.find((email) => email === usuarios_v.email);
        
        function mesmoEmail(email, procurarEmail){

        return email === procurarEmail

        }
        mesmoEmail(email, procurarEmail)

        if(mesmoEmail = true){
            alert('Conta com email já registrada!')
        }
        else{
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push({ usuario, email, idade, cidade, foto, senha });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            window.location.href = "../login/index.html"            
        }

        
        console.log(usuarios_v)
        console.log(camposVazios)

/////////////////////////////////////////
        if (camposVazios){
            alert('Nao podem haver campos vazios')
        }

        
    });
}
let botaoLogin = document.getElementById("botao_login");
if(botaoLogin){ 
    botaoLogin.addEventListener('click', () => {
        let emailLogin = document.getElementById("email_login").value
        let senhaLogin = document.getElementById("senha_login").value

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuario = usuarios.find(usuario => usuario.email === emailLogin && usuario.senha === senhaLogin)
        localStorage.setItem('usuarioLogado',JSON.stringify(usuario))

        console.log(usuarios, emailLogin, senhaLogin, usuario)
        if(usuario){
            window.location.href = "../boas_vindas/index.html"

        }
    })
}




let tituloDaSecao = document.getElementById('tituloDaSecao')
if(tituloDaSecao){
    
    let usuario = JSON.parse(localStorage.getItem('usuarioLogado')) || [];
    let titulo = document.getElementById('titulo')
    let imagem = document.createElement('img')
    let descricao = document.createElement('p')
    descricao.innerHTML = `Cidade: ${usuario.cidade}<br> Idade:${usuario.idade} <br>Email:${usuario.email}`

    imagem.setAttribute('src', usuario.foto)

    tituloDaSecao.textContent += usuario.usuario + '!'
    titulo.appendChild(tituloDaSecao)
    titulo.appendChild(imagem)
    titulo.appendChild(descricao)




    

}


