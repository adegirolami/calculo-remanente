const totalMensualInput = document.getElementById('total-mensual');
const consumidoInput = document.getElementById('consumido');
const calcularButton = document.getElementById('calcular');
const resultadoElement = document.getElementById('resultado');

calcularButton.addEventListener('click', calcularPresupuestoDiario);

function calcularPresupuestoDiario() {
    const totalMensual = parseFloat(totalMensualInput.value);
    const consumido = parseFloat(consumidoInput.value);
    const fechaActual = new Date();
    const ultimoDiaDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
    const diasRestantes = Math.ceil((ultimoDiaDelMes - fechaActual) / (1000 * 60 * 60 * 24));

    if (diasRestantes <= 0) {
        resultadoElement.textContent = 'No hay días restantes en el mes';
        return;
    }

    const remanente = totalMensual - consumido;
    const presupuestoDiario = remanente / diasRestantes;

    const resultado = `
  <p>🗓️ Días restantes: ${diasRestantes}</p>
  <p>💰 Presupuesto diario: $${presupuestoDiario.toFixed(0)}</p>
`;
    resultadoElement.innerHTML = resultado;
}
