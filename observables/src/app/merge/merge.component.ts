import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(map((res) => `Tech Video #` + res), take(5));
    const sourceComedy = interval(4000).pipe(map((res) => `Comedy Video #` + res), take(3));
    const sourceNews = interval(3500).pipe(map((res) => `News Video #` + res), take(4));

    const FinalObs = merge(sourceTech, sourceComedy, sourceNews);

    // Final observable will emit data accordingly ones it gets data. Means that for 3 seconds it will wait and emit sourceTexh emitted data and then emit sourceNews data at 3.5 seconds and then emit sourceComedy data at 4 seconds
    FinalObs.subscribe((res) => {
      console.log(res);
    })
  }
}
