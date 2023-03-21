function atualizarData() {
  const data = new Date();

  const horas = data.getHours();
  const minutos = data.getMinutes();

  const horasMostrar = horas < 10 ? `0${horas}` : horas;
  const minutosMostrar = minutos < 10 ? `0${minutos}` : minutos;
  
  document.querySelector(".horas").textContent = horasMostrar;
  document.querySelector(".minutos").textContent = minutosMostrar;

  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const diaSemana = diasSemana[data.getDay()];

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const mes = meses[data.getMonth()];
  
  const dia = data.getDate();
  const ano = data.getFullYear();
  const dataElemento = document.querySelector(".data");

  dataElemento.textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

setInterval(atualizarData, 1000);
