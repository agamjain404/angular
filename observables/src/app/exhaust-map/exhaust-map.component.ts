import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit {
  constructor(
    private httpClient: HttpClient
  ) {}

  num: number = 0;

  ngOnInit(): void {
    
  }

  btnClick() {
    this.num++;
  }
}
