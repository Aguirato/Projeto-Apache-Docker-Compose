function atualizarHorario() {
  const agora = new Date();
  const horario = agora.toLocaleString("pt-BR");
  document.getElementById("status").innerText =
    `✅ Página carregada com sucesso! Horário local do navegador: ${horario}`;
}

document.addEventListener("DOMContentLoaded", atualizarHorario);
document.getElementById("btn-check").addEventListener("click", atualizarHorario);
