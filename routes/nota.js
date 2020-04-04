const express = require('express');

const router = express.Router();

//Importar modelo
import Nota from '../models/nota';

router.get('/nota/:id', async (req, res) => {
    const notaId = req.params.id;
    try {
        const notaDB = await Nota.findOne({_id: notaId});
        res.status(200).json(notaDB);
    } catch (e) {

    }
});
router.get('/notas', async (req, res) => {
    try {
        const notasDB = await Nota.find();
        res.status(200).json(notasDB);
    } catch (e) {

    }
});

//Agregar la nota
router.post('/nueva-nota', async (req, res) => {
    const body = req.body;
    try {
        const notaDB = await Nota.create(body);
        res.status(200).json(notaDB);
    } catch (e) {
        res.status(500).json({
            mensaje: 'Ocurrio un error',
            error: e
        });
    }
});

console.log(router.stack.map(route => route.route.stack));
module.exports = router;