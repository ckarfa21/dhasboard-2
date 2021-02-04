Highcharts.chart('container', {

    title: {
      text: 'DONNEES COVID JOURNALIERE POUR L ENSEMBLE DE LA POPULATION'
    },
  
    subtitle: {
      text: 'stat donnees'
    },
  
  
    yAxis: [{
      className: 'highcharts-color-0',
      title: {
        text: 'Nombre de personnes'
      },
      lineColor: '#FF0000',
      lineWidth: 1
    }, {
      className: 'highcharts-color-1',
      opposite: true,
      title: {
        text: 'Nombres de personnes cumulées'
      },
      lineColor: '#00FF00',
      lineWidth: 1
    }],
  
  
    xAxis: {
      type: 'datetime'
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.UTC(2020, 2, 18),
       pointInterval: 24 * 2600 * 1000 // one day
        }
    },
  
    series: [{
      name: 'hosp',
      color: '#E0115F',
      data: Object.values(donneesfrompython.hosp)
    }, {
      name: 'rad',
      color: '#25FDE9',
      data: Object.values(donneesfrompython.rad),
      yAxis: 1
    }, {
      name: 'dc',
      color: '#25FF00',
      data: Object.values(donneesfrompython.dc)
    }, {
      name: 'rea',
      color: '#FF2525',
      data: Object.values(donneesfrompython.rea)
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });


 
Highcharts.chart('container2', {
    title: {
      text: 'Moyenne par sexe'
    },
    xAxis: {
      categories: ['TOTAL', 'HOMME', 'FEMME']
    },
    labels: {
      items: [{
        html: 'Moyenne Total des hommes et femmes',
        style: {
          left: '50px',
          top: '18px',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'black'
        }
      }]
    },
    series: [{
      type: 'column',
      name: 'hosp',
      data: Object.values(donnees2frompython.hosp)
    }, {
      type: 'column',
      name: 'rad',
      data: Object.values(donnees2frompython.rad)
    }, {
      type: 'column',
      name: 'dc',
      data: Object.values(donnees2frompython.dc)
    }, {
      type: 'column',
      name: 'rea',
      data: Object.values(donnees2frompython.rea)
    }, ]
});