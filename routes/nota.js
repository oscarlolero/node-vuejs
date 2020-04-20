const express = require('express');

const router = express.Router();

//Importar modelo
import Nota from '../models/nota';

router.post('/nota/:id', async (req, res) => {
    const notaId = req.params.id;
    console.log(notaId);
    try {
        const notaDB = await Nota.findOne({_id: notaId});
        res.status(200).json(notaDB);
    } catch (e) {

    }
});
router.post('/notas', async (req, res) => {
    try {
        const notasDB = await Nota.find();
        res.status(200).json(notasDB);
    } catch (e) {
        console.log(e);
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

router.put('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const notaDB = await Nota.findOneAndUpdate(_id, body, {new: true});
        res.status(200).json(notaDB);
    } catch (e) {
        res.status(500).json({
            mensaje: 'Ocurrio un error',
            error: e
        });
    }
});
router.delete('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const notaDB = await Nota.findOneAndDelete(_id);
        res.status(200).json(notaDB);
    } catch (e) {
        res.status(500).json({
            mensaje: 'Ocurrio un error',
            error: e
        });
    }
});
module.exports = router;