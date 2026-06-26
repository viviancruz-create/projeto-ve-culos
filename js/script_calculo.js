export function calcularIPVA(valor,combustivel,ano
){

    const anoAtual =new Date().getFullYear();

    const idade =anoAtual - ano;


    if(idade > 20){return "Isento";}


    switch(combustivel){

    case "gasolina":return valor * 0.20;

    case "etanol":return valor * 0.15;

    case "bicombustivel":return valor * 0.10;

    case "hibrido":return valor * 0.08;

    case "eletrico":return valor * 0.02;

    default:return 0;

    }

    }
