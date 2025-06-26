const helados = [
            {helado: 'vainilla', precio: 1400},
            {helado: 'chocolate', precio: 2400},
            {helado: 'pasas', precio: 2400},
            {helado: 'vainilla y chocolate', precio: 2600},
        ];
        const dineroCofla = parseInt(prompt("Ingresa el dinero que tiene Cofla: "));
        const dineroRoberto = parseInt(prompt("Ingresa el dinero que tiene Roberto"));
        const dineroPedro = prompt("Ingresa el dinero que tiene Pedro: ");


        const resultadoDiv1 = document.getElementById('resultadoCofla');
        const resultadoDiv2 = document.getElementById('resultadoRoberto');
        const resultadoDiv3 = document.getElementById('resultadoPedro');
        // const dineroRoberto = prompt("Ingresa el dinero que tiene Roberto: ")
        

document.addEventListener('DOMContentLoaded', () =>{ // “Cuando todo el HTML esté cargado y el DOM listo, ejecuta esta función”.
    const ul = document.createElement('ul'); // Le indica al navegador que cree un nuevo nodo de tipo ul
    helados.forEach(item =>{ //itera sobre el array
        const li = document.createElement('li'); // crea el elemento de la li
        li.textContent = `${item.helado} - $${item.precio}`; // imprime
        ul.appendChild(li);

    })
    document.body.appendChild(ul);

});



if (dineroCofla < 1400){

    resultadoDiv1.textContent = "Cofla, No te alcanza para nada. Te sobbra" ;
    // alert("No te alcanza para nada Cofla")

}

else if (dineroCofla >= 1400 && dineroCofla < 2600 ){
    

    resultadoDiv1.textContent = "Cofla, Te alcanza para helado de pasas o helado de  chocolate";
}
else{
    // alert("Te alcanza para todo")
    resultadoDiv1.textContent = "Cofla, Te alcanza para todo";
}


if (dineroRoberto < 1400){
    resultadoDiv2.textContent = "Roberto, no te alcanza para nada"
}

else if (dineroRoberto >= 1400 && dineroRoberto < 2600){
    resultadoDiv2.textContent="Roberto, te alcanza para el helado de pasas o el helado de chocolate"
}
else{
    resultadoDiv2.textContent='Roberto, te alcanza para todo'
}



if (dineroPedro < 1400){
    resultadoDiv3.textContent = 'Pedro, no te alcanza'
}

else if (dineroPedro >= 1400 && dineroPedro < 2600){
    resultadoDiv3.textContent ='Pedro, te alzcanza para el helado de chocolate y el helado de pasas'
}
else{
    resultadoDiv3.textContent='Pedro, te alcanza para todo'
}