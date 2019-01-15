import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable()

export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});

  selectedLog = this.logSource.asObservable();

  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date ('01/15/2019 12:01:02')},
      {id: '2', text: 'Added Bootstrap', date: new Date ('01/15/2019 14:02:03')},
      {id: '3', text: 'Added logs components', date: new Date ('01/15/2019 16:04:04')}
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log){
    this.logSource.next(log);
  }

  addLog(log: Log){
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id ) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log){
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id ) {
        this.logs.splice(index, 1);
      }
    });
  }
}
