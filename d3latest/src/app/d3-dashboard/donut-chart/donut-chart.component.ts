import { Component, OnInit } from '@angular/core';

declare var d3: any;

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {


  margin = { top: 10, right: 10, bottom: 90, left: 10 };

  width = 600 - this.margin.left - this.margin.right;

  height = 200 - this.margin.top - this.margin.bottom;

  xScale = d3.scale.ordinal().rangeRoundBands([0, this.width], .03)

  yScale = d3.scale.linear()
    .range([this.height, 0]);


  xAxis = d3.svg.axis()
    .scale(this.xScale)
    .orient("bottom");


  yAxis = d3.svg.axis()
    .scale(this.yScale)
    .orient("left");

  svgContainer = d3.select("#chartID").append("svg")
    .attr("width", this.width + this.margin.left + this.margin.right)
    .attr("height", this.height + this.margin.top + this.margin.bottom)
    .append("g").attr("class", "container")
    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");


  constructor() { }

  ngOnInit() {
    this.drawChart();

  }


  drawChart() {
    let self = this;
    let data = [{ "food": "Hotdogs", "quantity": 24 }, { "food": "Tacos", "quantity": 15 }, { "food": "Pizza", "quantity": 3 }, { "food": "Double Quarter Pounders with Cheese", "quantity": 2 }, { "food": "Omelets", "quantity": 30 }, { "food": "Falafel and Hummus", "quantity": 21 }, { "food": "Soylent", "quantity": 13 }];
    let margin = this.margin;

    let width = this.width;

    let height = this.height;

    let xScale = d3.scale.ordinal().rangeRoundBands([0, this.width], .03);
    this.xScale = xScale;
    let yScale = d3.scale.linear()
      .range([this.height, 0]);
    this.yScale = yScale;

    let xAxis = d3.svg.axis()
      .scale(this.xScale)
      .orient("bottom");
    this.xAxis = xAxis;

    let yAxis = d3.svg.axis()
      .scale(this.yScale)
      .orient("left");
    this.yAxis = yAxis;
    let svgContainer = d3.select("#chartID").append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g").attr("class", "container")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    this.svgContainer = svgContainer;

    xScale.domain(data.map(function (d: any) { return d.food; }));
    yScale.domain([0, d3.max(data, function (d: any) { return d.quantity; })]);


    //xAxis. To put on the top, swap "(height)" with "-5" in the translate() statement. Then you'll have to change the margins above and the x,y attributes in the svgContainer.select('.x.axis') statement inside resize() below.
    let xAxis_g = svgContainer.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height) + ")")
      .call(xAxis)
      .selectAll("text");

    // Uncomment this block if you want the y axis
    /*var yAxis_g = svgContainer.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6).attr("dy", ".71em")
        //.style("text-anchor", "end").text("Number of Applicatons"); 
    */


    svgContainer.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d: any) { return xScale(d.food); })
      .attr("width", xScale.rangeBand())
      .attr("y", function (d: any) { return yScale(d.quantity); })
      .attr("height", function (d: any) { return height - yScale(d.quantity); });

    svgContainer.selectAll(".text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (function (d: any) { return xScale(d.food) + xScale.rangeBand() / 2; }))
      .attr("y", function (d: any) { return yScale(d.quantity) + 1; })
      .attr("dy", ".75em")
      .text(function (d: any) { return d.quantity; });

   // document.addEventListener("DOMContentLoaded", self.resize());
    //d3.select(window).on('resize', self.resize());
  }


  resize() {
    var self = this;
    console.log('----resize function----');
    // update width
    self.width = parseInt(d3.select('#chartID').style('width'), 10);
    self.width = self.width - self.margin.left - self.margin.right;
self.width = window.innerWidth - self.width; 
    self.height = parseInt(d3.select("#chartID").style("height"));
    self.height = self.height - self.margin.top - self.margin.bottom;
    self.height = window.innerHeight - self.height;
    console.log('----resiz width----' + self.width);
    console.log('----resiz height----' + self.height);
    // resize the chart

    self.xScale.range([0, self.width]);
    self.xScale.rangeRoundBands([0, self.width], .03);
    self.yScale.range([self.height, 0]);

    self.yAxis.ticks(Math.max(self.height / 50, 2));
    self.xAxis.ticks(Math.max(self.width / 50, 2));

    d3.select(self.svgContainer.node().parentNode)
      .style('width', (self.width + self.margin.left + self.margin.right) + 'px');

    self.svgContainer.selectAll('.bar')
      .attr("x", function (d: any) { return self.xScale(d.food); })
      .attr("width", self.xScale.rangeBand());

    /*self.svgContainer.selectAll("text")  		
    // .attr("x", function(d) { return xScale(d.food); })
    .attr("x", (function(d:any) { return self.xScale(d.food	) + self.xScale.rangeBand() / 2 ; }  ))
       .attr("y", function(d:any) { return self.yScale(d.quantity) + 1; })
       .attr("dy", ".75em");   */

    self.svgContainer.select('.x.axis').call(self.xAxis.orient('bottom')).selectAll("text").attr("y", 10).call(self.wrap, self.xScale.rangeBand());
    // Swap the version below for the one above to disable rotating the titles
    // svgContainer.select('.x.axis').call(xAxis.orient('top')).selectAll("text").attr("x",55).attr("y",-25);


  }


  wrap(text: any, width: any) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }

}
