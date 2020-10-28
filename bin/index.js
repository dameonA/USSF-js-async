#!/usr/bin/env node
const fetch = require('node-fetch')
const fs = require ('fs')
// const data = {username: 'example'};
let poke_input = fs.readFileSync('bin/input.txt', 'utf8')

poke_input = poke_input.replace(/(\r)/gm, '')
let poke_input_arr = poke_input.split('\n')
poke_input_arr = poke_input_arr.map(entry => entry.toLowerCase());
async function read_pokemon_data(name){
await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data => data.json())
    .then(data => {
        console.log(name[0].toUpperCase() + name.substring(1) + ':' + data.types.map(element => element.type.name).join(', '))
         })
         .catch(err => console.log(err))
        }
        poke_input_arr.forEach(entry => read_pokemon_data(entry))

//file.readFileSync('/Users/dameon/USSF-js-async/bin/input.txt').toString().split('\n')
//     .forEach(pokemon => {
//     fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}/')
//     .then(response => response.json())
//     .then(data => {
//         console.log('${data.name}: ${data.types.map(classification => classification.type.name).join(', ')}')
//         });
 
//     });


// fetchPokemonName();
// async function postData( url = 'https://pokeapi.co/api/v2/pokemon/', data= {}) {
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors', 
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
    
//     }

    
