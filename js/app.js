
const number_input = document.querySelector('.card-number-input');
     number_box = document.querySelector('.card-number-box');
     card_holder_input = document.querySelector('.card-holder-input');
     card_holder_name = document.querySelector('.card-holder-name');
     mes_input = document.querySelector('.mes-input');
     exp_mes = document.querySelector('.exp-month');
     año_input = document.querySelector('.año-input');
     exp_año = document.querySelector('.exp-year');
     cvv_input = document.querySelector('.cvv-input');
     frenteImg = document.querySelector('.logoMarca');
// img logo


// Input de la tarjeta
number_input.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value;

    number_input.value = valorInput
    // Eliminamos espacios en blanco
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '')
    // Espacios cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    // Elimina el ultimo espaciado
    .trim();

    // Envia lo que se ve 
    number_box.textContent = valorInput;

    if(valorInput == ''){
        number_box.textContent = 'XXXX-XXXX-XXXX-XXXX'

        frenteImg.innerText='';
    }
    // Si el primer numero empieza con 4 se coloca la marca
    if(valorInput[0] == 4){
        frenteImg.innerText='';
        const imagen = document.createElement('img');
        imagen.src = './image/visa.png'
        frenteImg.appendChild(imagen);
        imagen.style.height= '40px';

        console.log('funciona')
    }
})

card_holder_input.oninput = () =>{
    card_holder_name.innerText = 
    card_holder_input.value;
}
mes_input.oninput = () =>{
    exp_mes.innerText = 
    mes_input.value;
}
año_input.oninput = () =>{
    exp_año.innerText = 
    año_input.value;
}

cvv_input.onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

cvv_input.onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
cvv_input.oninput = () =>{
    document.querySelector('.cvv-box').innerText =
    cvv_input.value;
}
