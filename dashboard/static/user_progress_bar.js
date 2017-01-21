var svg = d3.select('#progress_svg');
var points = ["Wolf", "Horse", "Bear"];
var p = [1]
var progress = [[1,1], [2,1], [3,.6]];
var pi = Math.PI;
var arc = d3.svg.arc()
    .innerRadius(function(d,i) { 
      if (d[1] === 1) {return 0;}
      else { if (i === 0 || i == points.length-1) 
                {return 14;}
             else {return 8;}
           }
   })
  .outerRadius(function(d,i) { 
      if (d[1] === 1) 
        {
          if (i === 0 || i === points.length-1) 
            {return 19;}
          else 
            {return 11;}
        }
      else {
          if (i === 0 || i === points.length-1) 
            {return 32;}
          else 
            {return 18;}
        }
   })
  .startAngle(0) 
  .endAngle(function(d) { return (d[1] * 2 * pi); });
 
svg.attr('height',550)i
   .attr('width', points.length*200 + 100);

svg.selectAll('g')
    .data(points)
    .enter().append('g')
    .attr('transform', function(d,i) {
        return 'translate(' + (200*i + 50) + ',50)';
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
          {return 200;}
        else {return 0;}
    })
  .attr('fill', 'steelblue');
       
svg.selectAll('g')
      .data(progress)
      .append('path')
        .attr('d', arc )
        .style('fill','orange');

svg.selectAll('text')
    .data(points)
    .enter().append('text')
      .attr('x', function(d,i) {return (200*i + 50);})
      .attr('y', 50)
      .attr("text-anchor", "middle")
      .attr("fill", "steelblue")
      .style("font-size", "16px")
      .text(function(d) { return d;})
