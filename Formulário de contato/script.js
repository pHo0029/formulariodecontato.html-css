document.getElementById('telefone').addEventListener('input', function(event) {
    let value = event.target.value.replace(/\D/g, '');


    event.target.value = value
        .replace(/^(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3')
        .slice(0, 15);
});