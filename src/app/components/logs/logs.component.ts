import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string,
    text: string,
    date: any
  }[];

  constructor() { }

  ngOnInit() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date ('01/15/2019 12:01:02')},
      {id: '2', text: 'Added Bootstra', date: new Date ('01/15/2019 14:02:03')},
      {id: '3', text: 'Added logs components', date: new Date ('01/15/2019 16:04:04')}
    ];
  }

}
