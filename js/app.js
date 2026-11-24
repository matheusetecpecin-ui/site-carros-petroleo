/* ==========================================================================
   SCRIPTS INTERATIVOS DO PROJETO (BOOTSTRAP 5.3 + JAVASCRIPT PURO)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Inicializa todos os Tooltips do Bootstrap presentes na página
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });

  // 2. Formulário da Landing Page de Carros (exibe Toast de confirmação)
  const formCarros = document.getElementById("leadCarros");
  if (formCarros) {
    formCarros.addEventListener("submit", function (event) {
      event.preventDefault();
      const toastEl = document.getElementById("toastCarros");
      if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
      formCarros.reset();
    });
  }

  // 3. Formulário da Landing Page de Petróleo (exibe Toast de confirmação)
  const formPetro = document.getElementById("formPetro");
  if (formPetro) {
    formPetro.addEventListener("submit", function (event) {
      event.preventDefault();
      const toastEl = document.getElementById("toastPetro");
      if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
      formPetro.reset();
    });
  }
});

// 4. Calculadora de Consumo Médio de Combustível (Página Carros)
function calcularConsumo() {
  const km = parseFloat(document.getElementById("kmInput").value);
  const litros = parseFloat(document.getElementById("litrosInput").value);
  const box = document.getElementById("resultadoConsumo");

  if (!box) return;

  if (km > 0 && litros > 0) {
    const media = (km / litros).toFixed(2);
    let classificacao = "Consumo regular";
    if (media >= 14) classificacao = "Excelente eficiência energética!";
    else if (media >= 10) classificacao = "Bom equilíbrio entre desempenho e economia.";
    else classificacao = "Consumo elevado (típico de uso urbano intenso ou motor maior).";

    box.className = "alert alert-success mt-3 mb-0";
    box.innerHTML = `<strong>Média calculada:</strong> ${media} km/l<br><small>${classificacao}</small>`;
  } else {
    box.className = "alert alert-warning mt-3 mb-0";
    box.textContent = "Por favor, informe valores maiores que zero para distância e litros.";
  }
}

// 5. Conversor de Barris de Petróleo para Litros e Galões (Página Petróleo)
function converterBarris() {
  const bbl = parseFloat(document.getElementById("barrisInput").value);
  const out = document.getElementById("resBarris");

  if (!out) return;

  if (bbl > 0) {
    const litros = (bbl * 158.987).toLocaleString("pt-BR", { maximumFractionDigits: 2 });
    const galoes = (bbl * 42).toLocaleString("pt-BR", { maximumFractionDigits: 2 });
    out.className = "alert alert-warning text-dark mt-3 mb-0";
    out.innerHTML = `<strong>${bbl} barril(is) (bbl)</strong> equivalem a:<br>• <strong>${litros} litros</strong><br>• <strong>${galoes} galões americanos</strong>`;
  } else {
    out.className = "alert alert-danger mt-3 mb-0";
    out.textContent = "Digite uma quantidade válida de barris maior que zero.";
  }
}
