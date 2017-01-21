var times = [40,40,120,45,15,70,20];
var days = ["Mon","Tues","Weds","Thurs","Fri","Sat","Sun"];
var max_time = Math.max(...times);
var max_y = 20*Math.floor(max_time/20) + 20;
var height = max_time*1.8 + 100;
var width = 475;
var h_margin = 20;
var w_margin = 50;
var offset = 30;
var y_ticks = [];

// create y_ticks array
for (var i = 1; i <= max_y/20; i++){
  y_ticks.push(i*20);
}

// line function for time graph
var time_line = 
      d3.svg.line()
        .x(function(d,i) {
          return (i*60 + offset + 30);
        })  
        .y(function(d) {
          return (height - d*1.8);
        })
        .interpolate("monotone");

// line function for graph base line
var base_line = 
      d3.svg.line()
        .x(function(d) {
            return d[0];
        })
        .y(function(d) {
            return d[1];
        })
        .interpolate("linear");

var svg = d3.select('#weekly_svg')
              .attr('width', width + w_margin)
              .attr('height', height + h_margin);
     
// add time graph path
svg.append("path")
      .attr("d", time_line(times))
      .attr("fill","None")
      .attr("stroke", "steelblue")
      .attr("stroke-width", "2");
      
// add base line path     
svg.append("path")
      .attr("d", base_line([[offset, height],
                            [width,height]]))
      .attr("stroke","grey")
      .attr("stroke-width", "2");
      
// add time points for each day
svg.selectAll("g")
    .data(times)
    .enter().append("g")
      .attr("transform", function(d,i) {
          return 'translate(' + (i*60 + offset + 30) +
                          ',' + (height - d*1.8) + ')';
      })
     .append("circle")
      .attr("r", 5)
      .attr("fill", "steelblue");
      
// add x-axis names
svg.selectAll(".x_axis")
    .data(days)
    .enter().append("text")
      .attr("class", "x_axis")
      .attr("x",function(d,i){
          return (i*60 + offset + 30);
      })             
      .attr("y", height + h_margin)
      .attr("text-anchor", "middle")  
      .attr("fill", "steelblue")
      .style("font-size", "16px") 
      .text(function(d) {return d;});
      
svg.selectAll(".y_axis")
    .data(y_ticks)  
    .enter().append("text")
      .attr("class","y_axis")
      .attr("x", offset/2)
      .attr("y",function(d,i){
          return (height - d*1.8);
      })  
      .attr("text-anchor", "middle")  
      .attr("fill", "steelblue")
      .style("font-size", "16px") 
      .text(function(d) {return d;});
