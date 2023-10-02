import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function PieChart({ budgetData }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create a new Chart instance when budgetData changes
    const newChartInstance = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: budgetData.map(item => item.title),
        datasets: [
          {
            data: budgetData.map(item => item.budget),
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ],
          },
        ],
      },
    });

    // Destroy the old Chart instance (if it exists)
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [budgetData]);

  return (
    <div className="pie-chart">
      <h2>Budget Distribution</h2>
      <canvas ref={chartRef} />
    </div>
  );
}

export default PieChart;

