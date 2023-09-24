const { Router } = require('express');

const { articulosGet, articulosPost, articulosPut, articulosDel } = require('../controllers/articulos.controller')

const router = Router()


router.get("/", articulosGet );
router.post("/", articulosPost );
router.put("/:id", articulosPut );
router.delete("/:id", articulosDel );


module.exports = router