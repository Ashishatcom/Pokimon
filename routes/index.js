var express = require('express');
var router = express.Router();
const axios = require('axios');
//Routes
router.get('/',(req,res,next)=>{

async function showAvatar() {

  let pokitype = await axios({
    method:'get',
    url:'https://pokeapi.co/api/v2/type'});               //First round Data Fetching
  let pokitypedata = pokitype.data.results;
    res.render('pokimon',{pokitypedata:pokitypedata});
  }
    showAvatar();
    });
    //Routes
router.post('/',(req,res,next)=>{
var api =req.body.form_select
async function showpokiurldata() {
  let typeapi = await axios({
    method:'get',
    url:`https://pokeapi.co/api/v2/type/${api}`});        //Second round Data Fetching
     var pokimoves = typeapi.data
     res.render('pokidata',{pokimoves:pokimoves});
  }
  showpokiurldata() 
});
router.post('/data/:id',(req,res,next)=>{
async function finaldata() {
  var urlapi = req.params.id
  let finalapi = await axios({
    method:'get',
    url:`https://pokeapi.co/api/v2/pokemon/${urlapi}`});     //Third round Data Fetching
    var pokimage = finalapi.data.sprites.front_default
    var pokspices = finalapi.data.species
    var finaldatapoki = finalapi.data
    res.render('pokidataviews',{pokimage:pokimage,pokspices:pokspices,finaldatapoki:finaldatapoki})
  }
  finaldata();
})
module.exports = router;
