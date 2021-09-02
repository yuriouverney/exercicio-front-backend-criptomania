var express = require('express');
const blogService = require('../services/blog.service');
var router = express.Router();

router.get('/', async (req, res, next) => {
  const resposta = await blogService.criarObjetoDados()
  res.json(resposta)
});

router.get('/user/:id', async (req, res, next) => {
  const { id } = req.params;
  const resposta = await blogService.informacoesUsuario(id)
  res.json(resposta)
});

router.get('/post/:id', async (req, res, next) => {
  const { id } = req.params;
  const resposta = await blogService.getInformacoesPost(id)
  res.json(resposta)
});

module.exports = router;