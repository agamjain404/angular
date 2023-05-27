import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map,  of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {
  getData(data: string) {
    return of(data + ' Uploaded').pipe(delay(1000));
  }

  ngOnInit(): void {
    // Example 1 | map
    // If we are using only map then flattening of observables can be done by subscribing again and again.
    const source1 = from(['Tech video', 'Comedy Video', 'News Video']);

    source1.pipe(map((res) => this.getData(res))).subscribe((res) => {
      res.subscribe((res2) => {
        console.log(res2);
      })
    });

    // Example 2 | map, concatAll()
    // map and concatAll operator can be used to flatten a observables and give a single output.
    source1.pipe(map((res) => this.getData(res)), concatAll()).subscribe((res) => {
      console.log(res);
    });

    // Example 2 | concatMap()
    // concatMap() operator can directly be used to flatten a observable and give a single output.
    source1.pipe(concatMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
    });
  }
}
