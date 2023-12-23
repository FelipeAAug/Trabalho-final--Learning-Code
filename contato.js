function submitForm() {
var name = document.getElementById('name').value;
var email = document.getElementById('name').value;
var message = document.getElementById('name').value;

if (name === '' || email === '' || message === '') {
    alert('Preencha todos os campos');
    return;
}

    var formData = {
        name: name,
        email: email,
        message: message
};

console.log('Sua mensagem foi enviada:', formData);
document.getElementById('resultado').innerHTML = 'Formulário enviado com sucesso!'
document.getElementById('contactForm').reset();
}