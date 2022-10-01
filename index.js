import express from "express";

const app = express();

app.listen(3000);
console.log('Server running on port 3000');

app.get('/employees', (req, res) => res.send('obteniendo empleados'));

app.post('/employees', (req, res) => res.send('creando empleados'));

app.put('/employees', (req, res) => res.send('actualizando empleados'));

app.delete('/employees', (req, res) => res.send('eliminando empleados'));