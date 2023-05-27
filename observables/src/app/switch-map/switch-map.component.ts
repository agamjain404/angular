import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
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

    // Example 2 | map, switchAll()
    // map and switchAll operator can be used to flatten a observables and give the latest emitted data.
    source1.pipe(map((res) => this.getData(res)), switchAll()).subscribe((res) => {
      console.log(res);
    });

    // Example 2 | switchMap()
    // switchMap() operator can directly be used to flatten a observable and give a latest emitted data.
    source1.pipe(switchMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
    });
  }
}
