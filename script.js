let sliderElement = document.querySelector("#slider");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;
}

function generatePassword(){
  let pass = '';
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  
  console.log(pass);
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass; // Armazena a nova senha na variável novaSenha
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha).then(function() {
        alert("Senha copiada com sucesso!");
    }, function(err) {
        console.error('Erro ao copiar senha: ', err);
    });
}
