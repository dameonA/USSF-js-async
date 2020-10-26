#!/usr/bin/env node
const fetch = require('node-fetch')
const data = {username: 'example'};


//console.log( "Hello!" );

var fs = require('fs');

var fileData = fs.readFileSync('input.txt');
var content = fileData.toString().split('\n')

function fetchPokemonName(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            console.log(pokemon);
        })
    })

}
fetchPokemonName();
async function postData( url = 'https://pokeapi.co/api/v2/pokemon/', data= {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    }

    
