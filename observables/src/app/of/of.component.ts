import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
    // of ooerator is used to convert the data stream of the passed data. We can pass any kind of data here Objects and array as well
    const observableData1 = of('Agam', 'Arpit', 'Akshat', { a: "Jack", b: "Back" }, ["Jain", "Sharma"]);

    // And then we can subscribe the data;
    observableData1.subscribe((data) => {
      console.log(data);
    })
  }
}
