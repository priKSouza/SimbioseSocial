const titulo = document.getElementById("nome-projeto");
const sinopse = document.getElementById("resumo");
const valorArtes = document.getElementById("valor-aprovado");
const captadoArtes = document.getElementById("valor-captado");

async function buscarAPI() {
  const response = await fetch(
    "http://api.salic.cultura.gov.br/v1/projetos/?limit=10&format=json",
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

  titulo.textContent = json._embedded.projetos[2].area;
  // sinopse.innerText = json._embedded.projetos[0].resumo;
  // valorArtes.innerText = json._embedded.projetos.valor_aprovado;
  // captadoArtes.innerText = json._embedded.projetos[0].valor_captado;
}

buscarAPI();