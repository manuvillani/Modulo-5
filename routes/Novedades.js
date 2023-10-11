var express = require('express');
var Router = express.Router();
var Novedadesmodels = require('./../models/Novedadesmodels');

Router.get('/', async function (req, res, next) {
  var Novedades = await Novedadesmodels.getNovedades();

  res.render('admin/Novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    Novedades
  });
});
Router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await Novedadesmodels.deleteNovedadById(id);
  res.redirect('/admin/Novedades')

});
Router.get('/Agregar', (req, res, next) => {
  res.render('admin/Agregar', {
    layout: 'admin/layout'
  });
});

Router.post('/Agregar', async (req, res, next) => {
  try {
    if (req.body.Titulo != "" && req.body.Substitulo != "" && req.body.Cuerpo != "") {
      await Novedadesmodels.insertNovedad(req.body);
      res.redirect('/admin/Novedades')
    } else {
      res.render('admin/Agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/Agregar', {
      layout: 'admin/layout',
      error: true, message: 'No se cargo la novedad'
    });
  }
});

Router.get('/Modificar/:id', async (req,res,next)=>{
  var id = req.params.id;
  var novedad = await Novedadesmodels.getNovedadesById(id);
  res.render('admin/Modificar',{
    layout:'admin/layout',
    novedad
  });
});

Router.post('/Modificar', async (req, res, next) => {
  try {
  var obj = {
  titulo: req.body.Titulo,
  subtitulo: req.body.Subtitulo,
  cuerpo: req.body.Cuerpo
  }
  console.log(obj)

  await Novedadesmodels.ModificarNovedadById(obj, req.body.id);
  res.redirect("/admin/novedades");
  }catch (error){
  console.log(error)
  res.render( 'admin/modificar',{
  layout: 'admin/layout',
  error: true, 
  message: 'No se modifico la novedad'
  })
  }
  });

module.exports = Router;