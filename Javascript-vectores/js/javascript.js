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

//listado de amigos con funcion lambda map
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


//nueva practica

const alumnos = [
    {
        nombre: 'Juan',
        edad:20,
    },
    {
        nombre: 'pedro',
        edad:20,
    },
    {
        nombre:'robert',
        edad:20,
    },
    {
        nombre: 'marcos',
        edad:20,
    },

]
sumaEdades = 0;
//formas de recorrer un vector alumnos
let mayores; //t|f
for(let i=0; i<alumnos.length; i++){
    mayores = alumnos[i].edad>40;
}
console.log('alumnos mayores', mayores);

for(let i=0; i<alumnos.length; i++){
	sumaEdades += alumnos[i].edad
}
console.log('edades', sumaEdades);

sumaEdades = 0;
let menores; //t|f
for(let alumno of alumnos){
	menores = alumno.edad<30;
}
console.log('alumnos menores', menores);

sumaEdades = 0;
for(let alumno of alumnos){
	sumaEdades += alumno.edad;
}
console.log('edades', sumaEdades);

sumaEdades = 0;
//funcion lambda array.forEach
alumnos.forEach(alumno=>sumaEdades += alumno.edad);
console.log('edades funcion forEach', sumaEdades);

//funcion lambda reduce
const sumaTotal = alumnos.reduce((acum, actual)=>acum + actual.edad, 0);
console.log('edades funcion reduce', sumaTotal);

//funcion lambda filter
const alumnosMenores = alumnos.filter(alumno=>alumno.edad <40);
console.log('menores de 40 funcion filter', alumnosMenores);

//funcion lambda every(t|f)
const todos = alumnos.every(alumno=>alumno.edad ===35);
console.log('tienen todos 35?', todos);

//funcion lambda map
const alumnosNuevos = alumnos.map(alumno=>alumno.nombre);
console.log('amigos funcion map', alumnos);

//funcion lambda some (t|f)
const menorDe25 = alumnos.some(alumno=>alumno.edad<25);
console.log('hay algun menor de 25?', menorDe25);

//mover de un vector a otro
const jovenesAlumnos = [];
for(let alumno of alumnos){
	if(alumno.edad <40)
		jovenesAlumnos.push(alumno);
}
console.log('jovenes alumnos', jovenesAlumnos)
	
	




























    

