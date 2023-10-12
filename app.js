const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Ruta para procesar el número
app.post('/comprobar', (req, res) => {
    const numero = req.body.numero;

    if (isNaN(numero)) {
        res.send('El valor ingresado no es un número válido.');
    } else {
        if (numero % 2 === 0) {
            res.send('El número es par.');
        } else {
            res.send('El número es impar.');
        }
    }
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
