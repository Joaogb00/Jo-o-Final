<template>
  <div class="dashboard-container">
    <!-- HEADER -->
    <header class="header">
      <h1>Visão Geral</h1>
      <div class="search-bar">
        <input type="text" placeholder="Buscar transações, relatórios..." />
        <button>🔍</button>
      </div>
    </header>

    <!-- CONTEÚDO -->
    <main class="content">
      <!-- CARDS DE RESUMO -->
      <section class="cards">
        <div class="card">
          <h3>Saldo Atual</h3>
          <p class="value">R$ 12.450,00</p>
          <span class="detail">+5,4% este mês</span>
        </div>

        <div class="card">
          <h3>Entradas</h3>
          <p class="value verde">R$ 8.200,00</p>
          <span class="detail">+8% em relação ao mês passado</span>
        </div>

        <div class="card">
          <h3>Saídas</h3>
          <p class="value vermelho">R$ 3.120,00</p>
          <span class="detail">-3,2% este mês</span>
        </div>
      </section>

      <!-- GRÁFICO FINANCEIRO -->
      <section class="grafico">
        <h2>Desempenho Financeiro</h2>
        <p>Visualize as entradas e saídas ao longo dos meses.</p>
        <Line :data="chartData" :options="chartOptions" />
      </section>

      <!-- FUTURA CONEXÃO COM BACKEND -->
      <section class="future">
        <h2>Integração com Backend</h2>
        <p>
          Em breve, os dados deste gráfico serão carregados diretamente do backend (PHP ou Node),
          mostrando estatísticas reais em tempo real.
        </p>
        <div class="placeholder">
          <span>🔧 Conexão com o servidor em desenvolvimento...</span>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const chartData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
  datasets: [
    {
      label: "Entradas",
      backgroundColor: "rgba(34,197,94,0.2)",
      borderColor: "#22c55e",
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.3,
      data: [4000, 3000, 5000, 4780, 5890, 5390, 6490],
    },
    {
      label: "Saídas",
      backgroundColor: "rgba(239,68,68,0.2)",
      borderColor: "#ef4444",
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.3,
      data: [2400, 1398, 2800, 2908, 3500, 3100, 3700],
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { labels: { color: "#fff" } } },
  scales: {
    x: { ticks: { color: "#9ca3af" }, grid: { color: "#2d2f33" } },
    y: { ticks: { color: "#9ca3af" }, grid: { color: "#2d2f33" } },
  },
};
</script>

<style scoped>
.dashboard-container {
  flex: 1;
  background-color: #0d0e10;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

/* HEADER */
.header {
  background-color: #15171b;
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #232428;
}

.header h1 {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #1e1f23;
  border-radius: 6px;
  overflow: hidden;
}

.search-bar input {
  background: none;
  border: none;
  padding: 8px 12px;
  color: #fff;
  width: 200px;
  outline: none;
  font-size: 0.85rem;
}

.search-bar button {
  background-color: #3b82f6;
  border: none;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 0.85rem;
}

.search-bar button:hover {
  background-color: #2563eb;
}

/* CONTEÚDO */
.content {
  padding: 20px 25px;
}

/* CARDS */
.cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}

.card {
  background-color: #1a1c20;
  flex: 1;
  min-width: 200px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, background 0.3s;
}

.card:hover {
  transform: translateY(-3px);
  background-color: #222428;
}

.card h3 {
  font-size: 0.9rem;
  color: #9ca3af;
  margin-bottom: 8px;
}

.value {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 4px;
}

.verde {
  color: #22c55e;
}

.vermelho {
  color: #ef4444;
}

.detail {
  font-size: 0.8rem;
  color: #6b7280;
}

/* GRÁFICO */
.grafico {
  background-color: #1a1c20;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  height: 280px;
}

.grafico h2 {
  color: #3b82f6;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.grafico p {
  color: #d1d5db;
  margin-bottom: 15px;
  font-size: 0.85rem;
}

/* ÁREA FUTURA */
.future {
  background-color: #1a1c20;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.future h2 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #3b82f6;
}

.future p {
  font-size: 0.85rem;
  color: #d1d5db;
  margin-bottom: 20px;
}

.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232428;
  padding: 25px;
  border-radius: 8px;
  color: #9ca3af;
  font-style: italic;
  font-size: 0.9rem;
}
</style>
