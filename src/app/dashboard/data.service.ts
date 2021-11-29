import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly data = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['MArço', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['JUnho', 27],
  ];

  constructor() { }

  receiveData(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.data);
      observable.complete();
    })
  }
}
