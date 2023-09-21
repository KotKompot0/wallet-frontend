import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { IGroupedBarGraph } from '../../interfaces/grouped-bar-graph';

@Component({
  selector: 'app-grouped-bar-graph',
  templateUrl: './grouped-bar-graph.component.html',
  styleUrls: ['./grouped-bar-graph.component.scss']
})
export class GroupedBarGraphComponent implements OnInit {
    public BarChart: any;

    @Input() Stats: Array<IGroupedBarGraph>;

    createChart(){
      this.BarChart = new Chart("GroupedBarChart", {
      type: 'bar',
      data: {
        labels: this.Stats.map(item => item.label),
        datasets: [
          {
            label: `Доход`,
            data: this.Stats.map(item => item.income),
            backgroundColor: `#4C49ED`,
            borderRadius: 5,
          },
          {
            label: `Расход`,
            data: this.Stats.map(item => item.expenses),
            backgroundColor: `#AFAEFE`,
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
      });
    }
    ngOnInit(): void {
      this.createChart();
    }
}
