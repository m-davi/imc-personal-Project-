// criada a função que calcula o IMC
function calcImc(peso,altura){
        resultado = Math.floor(peso / (altura**2));
        return resultado
}

//criei uma var para mostrar ou não uma div de acordoo com uma condição
//no caso a condição é o click do botão enviar
var mostrarDiv = document.getElementById('resultado');
mostrarDiv.style.display = 'none'; // comando para mostrar ou não uma div



// a
document.getElementById('enviar').addEventListener('click', function(){
        event.preventDefault();
        var peso = document.getElementById('numeroPeso').value;
        var altura = parseFloat(document.getElementById('numeroAltura').value);
        var resultado = calcImc(peso,altura);
        var texto = document.getElementById('resultado');
        var textResultado;
        mostrarDiv.style.display = 'block';

          

        console.log(resultado);
        console.log(peso);
        console.log(altura);

        //sequencia de If
        if (resultado <= 18.5 ){
                textResultado = 'Abaixo do Peso';
        } else if (resultado <= 24.9 ){
                textResultado ='Peso Normal';
        } else if ( resultado <= 29.9 ){
                textResultado = 'Sobrepeso';
        } else if ( resultado <= 34.9 ){
                textResultado = 'Obesidade Grau 1';
        } else if ( resultado <= 39.9 ){
                textResultado = 'Obesidade Grau 2';
        } else if ( 40 <= resultado ){
                textResultado = 'Obesidade Grau 3';
        }else{
                textResultado = 'Caracter INVÁLIDO, escreva um número';
        }

        texto.innerHTML = `${textResultado}`;


});

