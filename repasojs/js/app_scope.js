//Scope

/* var musica= 'Rock';

if(musica){
    var musica= 'Grunch';
    console.log('dentro if: '+musica);
} */

//Scope con let
let musica= 'Rock';

if(musica){
    let musica= 'Grunch';
    console.log('dentro if: '+musica);
}

console.log('fuera if: '+musica);