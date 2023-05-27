import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  ngOnInit(): void {
    const source1 = interval(2000).pipe(take(5));
    const source2 = interval(1500).pipe(take(5));

    combineLatest(source1, source2).subscribe((res) => {
      console.log(res);
    })

    // Output
    // (2) [0, 0]
    // (2) [0, 1]
    // (2) [1, 1]
    // (2) [1, 2]
    // (2) [2, 2]
    // (2) [2, 3]
    // (2) [2, 4]
    // (2) [3, 4]
    // (2) [4, 4]
  }
}
