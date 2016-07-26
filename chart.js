c3.generate({
  bindto: '#chart1',
  data: {
    columns: [
      ['antigen', 3.05,3.29,3.49,3.10,3.03,3.46,3.42,3.12,2.76,2.78,2.90,2.83,2.83,3.13,2.88,2.76,2.76,2.75,2.80,2.81,2.88,2.75,2.73,2.79,3.10,3.39,3.48,3.51,3.76,2.95,2.81,3.06,2.89,3.04,3.04,2.82,2.94,2.88,2.83,2.98,2.89,2.76,2.82,2.73,2.89,2.85,2.88,3.15,3.21],
      ['antibody', 0.07,0.07,0.07,0.07,0.07,0.07,0.07,0.07,0.08,0.07,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.07,0.08,0.08,0.08,0.08,0.08,0.07,0.08,0.08,0.08,0.08,0.08,0.08,0.08,0.07,0.07,0.07,0.08,0.08],
    ],
    type: 'line',
    colors: {
      antigen: '#FF7F0E',
      antibody: '#6F4FF8',
    },
  },
  axis: {
    y: {
      label: 'secs'
    }
  }
});

c3.generate({
  bindto: '#chart2',
  data: {
    columns: [
      ['antigen', 86.98],
      ['antibody', 3.28],
    ],
    type: 'bar',
    colors: {
      antigen: '#FF7F0E',
      antibody: '#6F4FF8',
    },
  },
  axis: {
    y: {
      label: 'secs'
    }
  },
});


c3.generate({
  bindto: '#chart3',
  data: {
    columns: [
      ['antigen', 25],
      ['antibody', 6.6],
    ],
    type: 'bar',
    colors: {
      antigen: '#FF7F0E',
      antibody: '#6F4FF8',
    },
  },
  axis: {
    y: {
      label: 'M'
    },
    x: {
      type: 'category',
      categories: ['Size']
    },
  },
});
