import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  getData(data: string) {
    return of(data + ' Uploaded')
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

    // Example 2 | map, mergeAll()
    // map and mergeAll operator can be used to flatten a observables and give a single output.
    source1.pipe(map((res) => this.getData(res)), mergeAll()).subscribe((res) => {
      console.log(res);
    });

    // Example 2 | mergeMap()
    // mergeMap() operator can directly be used to flatten a observable and give a single output.
    source1.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
    });
  }
}
