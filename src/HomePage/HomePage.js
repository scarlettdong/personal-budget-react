import '../App.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import PieChart from './PieChart'; 


function HomePage() {
    const [budgetData, setBudgetData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/budget')
            .then(response => {
                setBudgetData(response.data.myBudget);
            })
            .catch(error => {
                console.error("Error fetching the data", error);
            });
    }, []);

  return (
    
    <main className="center" id="main">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>

            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>

            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear...
                    because they know it is all good and accounted for.
                </p>
            </article>

            <article>
                <h1>Chart</h1>
                <PieChart budgetData={budgetData} />
            </article>

        </div>

    </main>
  );
}

export default HomePage;
