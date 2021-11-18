const titulo = document.getElementById("nome-projeto");
const estado = document.getElementById("estado1");
const sinopse = document.getElementById("resumo");
const valorArtes = document.getElementById("valor-aprovado");
const captadoArtes = document.getElementById("valor-captado");

const titulo2 = document.getElementById("nome-projeto2");
const estado2 = document.getElementById("estado2");
const sinopse2 = document.getElementById("resumo2");
const valorArtes2 = document.getElementById("valor-aprovado2");
const captadoArtes2 = document.getElementById("valor-captado2");

const titulo3 = document.getElementById("nome-projeto3");
const estado3 = document.getElementById("estado3");
const sinopse3 = document.getElementById("resumo3");
const valorArtes3 = document.getElementById("valor-aprovado3");
const captadoArtes3 = document.getElementById("valor-captado3");

async function buscarAPI() {
  const response = await fetch(
    "http://api.salic.cultura.gov.br/v1/projetos/?limit=100&format=json",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
    }
  );
  const json = await response.json();
  console.log(json);

  titulo.textContent = json._embedded.projetos[8].nome;
  estado.textContent = json._embedded.projetos[8].UF;
  sinopse.innerText = json._embedded.projetos[8].resumo;
  valorArtes.innerText = json._embedded.projetos[8].valor_aprovado;
  captadoArtes.innerText = json._embedded.projetos[8].valor_captado;

  titulo2.textContent = json._embedded.projetos[7].nome;
  estado2.textContent = json._embedded.projetos[7].UF;
  sinopse2.innerText = json._embedded.projetos[7].resumo;
  valorArtes2.innerText = json._embedded.projetos[7].valor_aprovado;
  captadoArtes2.innerText = json._embedded.projetos[7].valor_captado;

  titulo3.textContent = json._embedded.projetos[33].nome;
  estado3.textContent = json._embedded.projetos[33].UF;
  sinopse3.innerText = json._embedded.projetos[33].resumo;
  valorArtes3.innerText = json._embedded.projetos[33].valor_aprovado;
  captadoArtes3.innerText = json._embedded.projetos[33].valor_captado;
}

buscarAPI();
