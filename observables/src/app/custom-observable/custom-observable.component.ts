import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // To create a custom observer we need to call create method present inside Observable in which a callback function is passed
    // In that callback function itself we need to pass observer as a argument.
    // this observer has several methods
    // To emit some data we can call next()
    // to complete the observable that post this it will not emit data we can use observer.complete()
    // To throw a error we can use observer.error()
    const cusObs01 = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('Data Emit 1');
      }, 1000);

      setTimeout(() => {
        observer.next('Data Emit 2');
      }, 2000);

      setTimeout(() => {
        observer.next('Data Emit 3');
      }, 3000);

      setTimeout(() => {
        observer.next('Data Emit 4');
        // now here only data will complete so next time out will not be called
        observer.complete();
      }, 4000);

      setTimeout(() => {
        observer.next('Data Emit 4');
        observer.error(new Error('Limit Reached'));
      }, 5000);
    });

    // In subscribe three callbacks can be passed, 
    // First is of data emitted
    // Second is of error emitted
    // third is of if observer is completed and post completion if you want to do some operatipn
    cusObs01.subscribe((data: string) => {
      console.log(data);
    }, (err: any) => {
      console.error("error", err);
    }, () => {
      console.log("Conpleted data emittion");
    })
  }
}
