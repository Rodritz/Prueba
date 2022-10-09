const btnAdd1 = document.getElementById('btnAdd1');

const comestibles = [];

btnAdd1.addEventListener('click', addComestible);

function addComestible() {
    const comestible = document.getElementById('comestible').value;

    addToList(comestible);

    renderComestibleByDom();
}

function addToList(comestible) {
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
///////////////////////

const btnAdd2 = document.getElementById('btnAdd2');

const articulos = [];

btnAdd2.addEventListener('click', addArticulo);

function addArticulo(){
    const articulo = document.getElementById('articulo').value;
    
    addToList(articulo);

    renderArticuloByDom();
}

function addToList(articulo){
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