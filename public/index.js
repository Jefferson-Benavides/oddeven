document.getElementById('numeroForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const numero = parseInt(document.getElementById('numeroInput').value);

            if (isNaN(numero)) {
                document.getElementById('resultado').innerText = 'El valor ingresado no es un numero valido.';
            } else {
                fetch('/comprobar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `numero=${numero}`
                })
                .then(response => response.text())
                .then(result => {
                    document.getElementById('resultado').innerText = result;
                });
            }
        });
    