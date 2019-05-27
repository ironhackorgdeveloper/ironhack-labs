const stockInfo = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/stock/',
});


function getChart () {
  const stockTicket = document.getElementById('stock-code-input').value;

  stockInfo.get(`${stockTicket}/chart`)
    .then((response) => {
      printTheChart(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  const printTheChart = ((stockData) => {
    const stockLabels = stockData.map(element => element.date);
    const stockPrice = stockData.map(element => element.close);
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: stockLabels,
        datasets: [{
          label: 'Stock Chart',
          backgroundColor: ['rgba(255, 99, 132, 1)',
            'rgba(0, 99, 132, 1)',
            'rgba(255, 99, 0, 1)',
            'rgba(255, 0, 132, 1)',
            'rgba(132, 99, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 0, 132, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(0, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(132, 99, 255, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 0, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderColor: 'rgb(255, 99, 132)',
          data: stockPrice,
        }],
      },
    });
  });
}
