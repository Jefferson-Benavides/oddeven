const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Ruta para procesar el n�mero
app.post('/comprobar', (req, res) => {
    const numero = req.body.numero;

    if (isNaN(numero)) {
        res.send('El valor ingresado no es un n�mero v�lido.');
    } else {
        if (numero % 2 === 0) {
            res.send('El n�mero es par.');
        } else {
            res.send('El n�mero es impar.');
        }
    }
});

app.listen(port, () => {
    console.log(`Servidor en ejecuci�n en http://localhost:${port}`);
});
