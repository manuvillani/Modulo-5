var express = require('express');
var Router = express.Router();
var Novedadesmodels = require('./../models/Novedadesmodels');

Router.get ('/', async function (req,res,next){
var Novedades = await Novedadesmodels.getNovedades();

res.render('admin/Novedades' , {
  layout: 'admin/layout',
  usuario: req.session.nombre,
  Novedades
   });
});
Router.get ('/eliminar/:id', async (req,res, next) =>{
  var id = req.params.id;
  await Novedadesmodels.deleteNovedadById(id);
  res.redirect('/admin/Novedades')
  
 });
 


module.exports = Router;