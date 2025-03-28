import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PokemonStats = ({ stats }) => {
  const data = {
    labels: stats.map(stat => stat.stat.name.toUpperCase()),
    datasets: [{
      label: 'Base Stats',
      data: stats.map(stat => stat.base_stat),
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(231, 76, 60, 0.6)',
        'rgba(155, 89, 182, 0.6)',
        'rgba(52, 152, 219, 0.6)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(231, 76, 60, 1)',
        'rgba(155, 89, 182, 1)',
        'rgba(52, 152, 219, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Estadísticas del Pokémon' }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 120
      }
    }
  };

  return (
    <div className="pokemon-stats">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PokemonStats;