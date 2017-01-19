/* html:
<script src="https://d3js.org/d3.v4.min.js"></script>

<svg></svg>
*/

var svg = d3.select('svg');
var points = [1,2,3];
var p = [1]
var progress = [[1,1], [2,1], [3,.6]];
var pi = Math.PI;
var arc = d3.svg.arc()
  .innerRadius(function(d) { 
      if (d[1] === 1) {return 0;}
      else {return 8;}
   })
  .outerRadius(function(d) { 
      if (d[1] === 1) {return 11;}
      else {return 18;}
   })
  .startAngle(0) 
  .endAngle(function(d) { return (d[1] * 2 * pi); });
 
svg.attr('height',550).attr('width',550);

svg.selectAll('g')
    .data(points)
    .enter().append('g')
    .attr('transform', function(d,i) {
        return 'translate(' + (100*i + 50) + ',200)';
    })
    .append('circle')
      .attr('r',20)
      .style('fill','steelblue');
      
svg.selectAll('g')
  .append('rect')
  .attr('x', 10)
  .attr('y', -8)
  .attr('height', function(d,i) {
        if ( i < points.length - 1)
          {return 16;}
        else {return 0;}
    })
  .attr('width', function(d,i) {
        if ( i < points.length - 1)
          {return 100;}
        else {return 0;}
    })
  .attr('fill', 'steelblue');
       
svg.selectAll('g')
      .data(progress)
      .append('path')
        .attr('d', arc )
        .style('fill','orange');
