const titulo = document.getElementById("nome - projeto");
const sinopse = document.getElementById("resumo");
const valorArtes = document.getElementById("valor-aprovado");
const captadoArtes = document.getElementById("valor-captado");

const segundoProjeto = document.getElementById("projeto-2");
const sinopseSegundoProjeto = document.getElementById("resumo-2");
const valorSegundoProjeto = document.getElementById("valor-aprovado-2");
const captadoSegundoProjeto = document.getElementById("valor-captado-2");

const terceiroProjeto = document.getElementById("projeto-3");
const sinopseTerceiroProjeto = document.getElementById("resumo-3");
const valorTerceiroProjeto = document.getElementById("valor-aprovado-3");
const captadoTerceiroProjeto = document.getElementById("valor-captado-3");

async function buscarAPI() {
  const response = await fetch(
    "http://api.salic.cultura.gov.br/v1/projetos/?limit=6&format=json",
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

  titulo.innerText = json._embedded.projetos[2].area;
  sinopse.innerText = json._embedded.projetos[18].resumo;
  valorArtes.innerText = json._embedded.projetos[16].valor_aprovado;
  captadoArtes.innerText = json._embedded.projetos[30].valor_captado;

  segundoProjeto.innerText = json._embedded.projetos[34].area;
  sinopseSegundoProjeto.innerText = json._embedded.projetos[50].resumo;
  valorSegundoProjeto.innerText = json._embedded.projetos[48].valor_aprovado;
  captadoSegundoProjeto.innerText = json._embedded.projetos[62].valor_captado;

  terceiroProjeto.innerText = json._embedded.projetos[66].area;
  sinopseTerceiroProjeto.innerText = json._embedded.projetos[82].resumo;
  valorTerceiroProjeto.innerText = json._embedded.projetos[80].valor_aprovado;
  captadoTerceiroProjeto.innerText = json._embedded.projetos[94].valor_captado;
}

buscarAPI();
