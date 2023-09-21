import { Component, OnInit } from '@angular/core';
import { MonthlyStats } from './interfaces/monthly-stats';
import { GroupedBarGraph } from './interfaces/grouped-bar-graph';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  MonthlyStatsData: Array<MonthlyStats> = [];
  GroupedBarGraphData: Array<GroupedBarGraph> = [];
  ngOnInit(): void {
    this.MonthlyStatsData.push(
      new MonthlyStats('Кофты', 450)
    )
    this.MonthlyStatsData.push(
      new MonthlyStats('Обувь', 220)
    )
    this.MonthlyStatsData.push(
      new MonthlyStats('Ещё что-то', 800)
    )

    this.GroupedBarGraphData.push(
      new GroupedBarGraph("April", 8120, 3400)
    )
    this.GroupedBarGraphData.push(
      new GroupedBarGraph("May", 8510, 5501)
    )
    this.GroupedBarGraphData.push(
      new GroupedBarGraph("June", 6042, 9230)
    )
    this.GroupedBarGraphData.push(
      new GroupedBarGraph("July", 7510, 4841)
    )
    this.GroupedBarGraphData.push(
      new GroupedBarGraph("August", 9505, 7041)
    )
    this.GroupedBarGraphData.push(
      new GroupedBarGraph("September", 10043, 7560)
    )
    this.GroupedBarGraphData.push(
      new GroupedBarGraph("October", 104443, 7560)
    )
  }
}
