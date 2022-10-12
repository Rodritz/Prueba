const btnAdd1 = document.getElementById('btnAdd1');
const btnBorrar1 = document.getElementById('btnBorrar1');

document.getElementById('borrarLista').addEventListener('click', eliminarLista);


const comestibles = [];

btnAdd1.addEventListener('click', addComestible);
btnBorrar1.addEventListener('click', borrar1);

function addComestible() {
    const comestible = document.getElementById('comestible').value;

    const isValid = validacion(comestible);

    if(!isValid){
        alert('debe completar el campo');
        return;
    }

    addToList1(comestible);

    renderComestibleByDom();   
}

function validacion(comestible){
    return comestible !=='';
}

function addToList1(comestible) {
    comestibles.push(comestible);
}

function renderComestibleByDom(){
    const list1 = document.getElementById('comestibles');

    const ul1 = document.createElement('ul');
    list1.innerHTML = '';
    ul1.id = 'ul1'
    list1.appendChild(ul1);

    for(let comestible of comestibles) {
        const li1 = document.createElement('li');
        li1.innerHTML = comestible;
        li1.id = Math.random();
        ul1.appendChild(li1);
    }    
    
}

function borrar1(){
    document.getElementById('comestible').value ='';
    //document.getElementById('articulo').value ='';
}

function eliminarLista (){
    clearList ();

    document.getElementById('comestibles').innerHTML='';
}

function clearList (){
    while(comestibles.length>0){
        comestibles.pop();
    }    
}


///////////////////////////////////////////////

const btnAdd2 = document.getElementById('btnAdd2');
const btnBorrar2 = document.getElementById('btnBorrar2');
document.getElementById('borrarLista2').addEventListener('click', eliminarLista2)

const articulos = [];

btnAdd2.addEventListener('click', addArticulo);
btnBorrar2.addEventListener('click', borrar2);

function addArticulo(){
    const articulo = document.getElementById('articulo').value;

    const isValid = validacion(articulo);

    if(!isValid){
        alert('debe completar el campo');
        return;
    }
    
    addToList2(articulo);

    renderArticuloByDom();
}

function validacion(articulo){
    return articulo !=='';
}

function addToList2(articulo){
    articulos.push(articulo);
}

function renderArticuloByDom(){
    const list2 = document.getElementById('articulos');

    const ul2 = document.createElement('ul');
    list2.innerHTML = '';
    ul2.id = 'ul2'
    list2.appendChild(ul2);

    for(let articulo of articulos){
        const li2 = document.createElement('li');
        li2.innerHTML = articulo;
        li2.id = Math.random();
        ul2.appendChild(li2);
    }
}
function borrar2(){
    //document.getElementById('comestible').value ='';
    document.getElementById('articulo').value ='';
}

function eliminarLista2 () {
    clearList2 ();
    document.getElementById('articulos').innerHTML = '';
}

function clearList2(){
    while(articulos.length>0){
        articulos.pop();
    }
}