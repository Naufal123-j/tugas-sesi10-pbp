const express = require('express');
const router = express.router();
const db = require('../models/db');

// GET /mahasiswa 
router.get('/', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (error, result) => {
        if (error){
            console.error('error fetching mahasiswa:', error);
            res.status(500.).json ({message: 'internal server error'});
        } else {
            res.json(results);
        }
    });
});

//GET /mahasiswa/:nim
router.get('/:nim', (req, res) => {
    const mahasiswaId = req.params.nim;
    db.query('SELECT * FROM mahasiswa WHERE nim = ?', [mahasiswaId], (error, result) =>{
        if (error){
            console.error('error fetching mahasiswa:', error);
            res.status(500).json({message: 'internal server error'});
        } else if (result.length === 0){
            res.status(404).json({message: 'mahasiswa not found'});
        } else {
            res.json(result[0]);
        }
    });
});

//PUT /mahasiswa /:nim
router.put('/:nim', (req, res) => {
    const mahasiswaNim = req.params.nim;
    const { nama, gender, prodi, alamat } = req.body;
    db.query('UPDATE mahasiswa SET nama = ?,gender =?,prodi =?,alamat= ? WHERE nim = ?', [nama, gender, prodi, alamat, mahasiswaNim], (error)=> {
        if (error){
            console.error('error updating mahasiswa:', error);
            res.status(500).json ({message: 'internal server error'});
        } else {
            res.json("updating mahasiswa succesfullys");
        }
    });
});

module.export = router;