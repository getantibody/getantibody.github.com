c3.generate({
  bindto: '#chart1',
  data: {
    columns: [
      ['Antibody', 2.97,1.59,1.69,1.91,1.51,1.52,1.63,1.60,1.58,1.57,1.57,1.53,1.56,1.51,1.51,1.51,1.51,1.64,1.64,1.78,1.62,1.54,1.54,1.51,1.09,1.06,1.01,1.03,1.05,1.18,1.12,1.09,1.04,1.05,1.04,1.05,1.03,1.04,1.08,1.11,1.08,1.05,1.10,1.13,1.07,1.05,1.07,1.05,1.03,1.99],
      ['Antigen', 77.27,3.00,3.00,2.92,3.10,3.23,3.09,2.96,3.10,3.16,3.07,3.06,3.33,2.95,2.92,2.96,2.99,2.91,3.19,3.01,3.05,4.15,3.27,3.49,3.25,3.03,3.03,3.15,3.31,3.35,2.96,3.10,2.85,3.37,3.02,3.18,3.02,3.41,3.07,2.94,3.07,3.12,3.01,3.07,3.62,2.92,3.17,3.21,3.02,3.40]
    ],
    type: 'line',
  },
  axis: {
    y: {
      label: 'seconds'
    }
  }
});

c3.generate({
  bindto: '#chart2',
  data: {
    columns: [
      ['Antibody', 5.09],
      ['Antigen', 25]
    ],
    type: 'bar',
  },
  axis: {
    y: {
      label: 'mb'
    }
  }
});
