const amigos = [
    {
        nombre:'Cristian',
        edad:43,
        reside:'España'   
    },
    {
        nombre:'Rodrigo',
        edad:42,
        reside:'Argentina'   
    },
    {
        nombre:'Luciano',
        edad:35,
        reside:'Argentina'    
    },
    {
        nombre:'Marina',
        edad:29,
        reside:'Uruguay'
    }
];
//sumamos edades
let sumaEdades = 0;

for(let i=0; i<amigos.length; i++) {
    sumaEdades += amigos[i].edad;
}
console.log('primer forma', sumaEdades);

sumaEdades = 0;
for(let amigo of amigos){
    sumaEdades += amigo.edad;
}
console.log('seg forma', sumaEdades);

sumaEdades = 0;
amigos.forEach(amigo => sumaEdades += amigo.edad);
console.log('3er forma', sumaEdades);

const sumaReduce = amigos.reduce((acum,actual)=>acum+actual, 0);
console.log('sumaReduced', sumaEdades);

// filtramos residencia
const residencia = amigos.filter(amigo=>amigo.reside ==='Argentina');
console.log('residenciaFilter', residencia);

const extranjeros = amigos.filter(amigo=>amigo.reside !='Argentina');
console.log('extranjerosFilter', extranjeros);

//busqueda con filter de mayores y menores de 40
const amigosMayores40 = amigos.filter(amigo=>amigo.edad > 40);
console.log ('amigos mayores de 40', amigosMayores40);

const amigosMenores40 = amigos.filter(amigo=>amigo.edad < 40);
console.log('amigos menores de 40', amigosMenores40);

//listado de amigos menores y mayores de 40
const mayoresDe40 = [];
for(let amigo of amigos) {
    if(amigo.edad > 40) {
        mayoresDe40.push(amigo);
    }
}
console.log('mayores de 40', mayoresDe40);

const menoresDe40 = [];
for(let amigo of amigos){
    if(amigo.edad<40){
        menoresDe40.push(amigo);
    }
}
console.log('menores de 40', menoresDe40);

//listado de amigos con map
const amigotes = amigos.map(amigo=>amigo.nombre);
console.log('amigotes', amigotes);

//que edades rondan??
let cuarentones = true
for(let amigo of amigos){
    cuarentones = amigos.edad>40;
}
console.log('son todos cuarentontes', cuarentones);

let pendex = false;
for(let i=0; i < amigos.length && pendex; i++){
    pendex = amigos[i].edad < 40;
} 
console.log('son todos pendex', pendex)

const menorDe30 = amigos.some(amigo=>amigo.edad<30);
console.log('hay algun menor de 30', menorDe30)

const mayoresDe25 = amigos.every(amigo=>amigo.edad>25);
console.log('son todos mayores de 25', mayoresDe25);

















    

