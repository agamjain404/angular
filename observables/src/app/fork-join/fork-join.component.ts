import { Component, OnInit } from '@angular/core';
import { forkJoin, interval, take } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {
  ngOnInit(): void {
    const source1 = interval(2000).pipe(take(5));
    const source2 = interval(1500).pipe(take(5));

    forkJoin(source1, source2).subscribe(([res1, res2]) => {
      console.log(res1);
      console.log(res2);
    });

  }
}
