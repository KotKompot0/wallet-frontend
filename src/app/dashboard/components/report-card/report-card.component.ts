import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {
    @Input() title: string;
    @Input() sum: string;

    splittedSum: Array<string>;

    ngOnInit(): void {
      this.splittedSum = this.sum.split(".");
    }
}
