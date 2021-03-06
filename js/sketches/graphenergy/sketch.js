var makeGraph2 = function(){

  var trace1 = {
    x: [0,1,2,3,4,5,6],
    y: [28, 63, 90, 100, 90, 63, 28],
    text: ['6.1% chance', '13.6% chance', '19.5% chance','21.6% chance','19.5% chance','13.6% chance','6.1% chance'],
    mode: 'markers',
    type: 'bar',
  };

  var data = [ trace1 ];

  var layout = {
    xaxis: {
      title: 'State (i.e. Number of Energy Packets in One Solid)',
    },
    yaxis: {
      title: 'Number of Arrangements'
    },
    title:'Ways to Arrange Energy Among Two Objects'
  };

  Plotly.plot('graphenergy', data, layout);

}

Plotly.d3.select(window).on('resize.two', function () {
  Plotly.deleteTraces('graphenergy', 0);
  makeGraph2();
});
