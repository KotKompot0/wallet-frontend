import { Component, OnInit, Input, Output } from '@angular/core';
import { IMonthlyStats } from '../../interfaces/monthly-stats';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-monthly-stats',
  templateUrl: './monthly-stats.component.html',
  styleUrls: ['./monthly-stats.component.scss']
})
export class MonthlyStatsComponent implements OnInit {
  public chart: any;

  @Input() Stats: Array<IMonthlyStats>;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  getRandomColor() {
    let color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  getRandomColors(count: number){
      let colors = [];
      for(let i = 0; i< count; i++){
        colors.push(this.getRandomColor())
      }
      return colors;
  }

  createChart(){
    this.chart = new Chart("PieChart", {
    type: 'doughnut',
    data: {
      labels: this.Stats.map(item => item.label),
      datasets: [
        {
          data: this.Stats.map(item => item.count),
          backgroundColor: this.getRandomColors(this.Stats.length),
        }
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
    });
  }
}
