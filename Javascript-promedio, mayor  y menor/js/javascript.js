function calcularNotas() {
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;

    const notasValidas = validarNotas(nota1,nota2,nota3);

    if(!notasValidas) {
        alert('verifique los datos ingresados');
        return;
    }

    calcularValores(nota1, nota2, nota3);
}

function validarNotas(nota1, nota2, nota3) {
    if(Number(nota1) && Number(nota2) && Number(nota3)) {
        return true;
    }
    return false;
}

function calcularValores(nota1,nota2,nota3) {
    const notas = [];        

    notas[0] = +nota1;
    notas[1] = parseInt(nota2);
    notas[2] = parseInt(nota3);  


    let menor = notas[0];
    let mayor = notas[0];
    let promedio;
    let suma = 0;

    for(let i=0; i<notas.length; i++) {
        if(notas[i] < menor) {
            menor = notas[i];
        }
        
        if(notas[i] > mayor) {
            mayor = notas[i];
        }

        suma += notas[i];
    }

    promedio = suma / notas.length;

    console.log(menor);
    console.log(mayor);
    console.log(promedio);

    actualizar('menor', menor); 
    actualizar('mayor', mayor);     
    actualizar('promedio', promedio);

}

function actualizar(id,valor) {
    document.getElementById(id).value = valor;
}

function borrar() {
    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('nota3').value='';
    document.getElementById('menor').value='';
    document.getElementById('mayor').value='';
    document.getElementById('promedio').value='';
}