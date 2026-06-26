import { calcularIPVA }
from "./script_calculo.js";


const formulario =document.querySelector("#formVeiculo");

const listaVeiculos =document.querySelector("#listaVeiculos");


const formModelo =document.querySelector("#modelo");

const formMarca =document.querySelector("#marca");

const formPlaca =document.querySelector("#placa");

const formAno =document.querySelector("#ano");

const formValor =document.querySelector("#valor");



formulario.addEventListener("submit", function(event){event.preventDefault();


const modelo =formModelo.value;

const marca =formMarca.value;

const placa =formPlaca.value;

const ano =Number(formAno.value);

const valor =Number(formValor.value);


const combustivel =document.querySelector('input[name="combustivel"]:checked').value;



const idade =new Date().getFullYear()- ano;


const seguro =valor * 0.10;


const ipva =calcularIPVA(valor,combustivel,ano);


const licenciamento = 250;


const valorFinal =ipva == "Isento"? seguro + licenciamento: seguro + ipva + licenciamento;



listaVeiculos.innerHTML +=

`

<div class="card">

<h3>${modelo}</h3>

<p>Marca:${marca}</p>

<p>Placa:${placa}</p>

<p>Idade:${idade} anos</p>

<p>Seguro:R$ ${seguro.toFixed(2)}</p>

<p>IPVA:
${ipva=="Isento"? "Isento": "R$ " + ipva.toFixed(2)}</p>

<p>Licenciamento:R$ ${licenciamento}</p>

<p>Valor Final:R$ ${valorFinal.toFixed(2)}</p>

</div>

`;

formulario.reset();

}

);

