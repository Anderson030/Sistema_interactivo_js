// Seleccionamos elementos
const form = document.getElementById('form-notas');
const btn = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', () => {
  // Recolectar valores y convertirlos a Number
  const notas = [];
  for (let i = 1; i <= 5; i++) {
    const input = document.getElementById('nota' + i);
    const valor = input.value.trim();

    // Validación: solo dígitos y opcional punto decimal
    if (!/^\d+(\.\d+)?$/.test(valor)) {
      resultado.textContent = `Entrada inválida en Nota ${i}. Usa solo números.`;
      resultado.style.color = 'red';
      return;
    }

    notas.push(parseFloat(valor));
  }

  // Sumar y calcular promedio
  let suma = 0;
  for (let n of notas) suma += n;
  const promedio = suma / notas.length;

  // Mostrar resultado y estado
  const estado = promedio >= 3.0 ? 'Aprobado' : 'Reprobado';
  resultado.textContent = `Promedio: ${promedio.toFixed(2)} — ${estado}`;
  resultado.style.color = estado === 'Aprobado' ? 'green' : 'maroon';
});
