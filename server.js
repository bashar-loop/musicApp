'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const request = require('request');
let Music_API_KEY = process.env.Music_API_KEY;
const superagent = require('superagent');
const PORT = process.env.PORT || 5000;
const pg = require('pg')
let app = express();
// app.use(express.static('public'))
//app.use('/static', express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
//ch2----
// app.get('/test', (req,res) =>{
    // var request = require("request");
    // let reqJson = req.body
    // res.render('music/show')
// var options = {
//   method: 'GET',
//   url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${req.query.input}`,
//   qs: {q: req.query.input },
  
//   headers: {
//     'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
//     'x-rapidapi-key': Music_API_KEY
//   }
// }
// // superagent(options.url)
// // .then(musicData =>{
// //     let jSonData =musicData.body.data
// //     console.log(jSonData)
// //     console.log('hi');
// // })
// request(options, function (error, response, body) {
//    // console.log(options.qs.q)
//     if (error) throw new Error(error)
//  // superagent.get(options.url)
//  //let jSonData =body.data
//     //console.log(jSonData)
    
    
//     let jSonData = JSON.parse(body)
//     let song = jSonData.data.map(singer => new Music(singer))
    // res.redirect('/')

    // ch1-----
   // res.render('pages/new' , {list:song}); 

// });
    // for(let i=0 ;i<jSonData.data.length; i++){
        
    //     res.send(jSonData.data[i].title)
    // }
    // let rendered = jSonData.data.forEach(song => {
    //     let formatted = new Music(song)
    //     console.log(formatted)
    // })
    // let hello = jSonData.forEach(song => {
    //     let formatted = new Music(song)
    //     console.log(formatted)
    // })
//      res.render(`music/show` , hello)
  
// function Music(singer){
//     this.title=singer.title
//     this.preview_mp3=singer.preview
//     this.artistName=singer.artist.name
//     this.album_cover_image=singer.album.cover_medium
//     this.album_title=singer.album.title
// } 
// })
app.get('/', (req,res) => {
    // console.log(req);
     res.render('pages/index');
 })
app.get('*', (req, res) => {
   // console.log('this is for checking ', req);
    res.status(404).render('./pages/error', { erorr: '404 NOT FOUND' })
});
const client = new pg.Client(process.env.DATABASE_URL);
client.connect(console.log('im DB'))
.then( () => {
app.listen(PORT, () => {
    console.log(`Host : ${PORT}` )
})
})