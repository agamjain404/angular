import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef | any;
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // So here whenever user give some input in the text box it will be subscribed when user stops hitting the same event for the specific amount of time passed inside debouncTime operator. In this way it works.

    // If we use distinctuntilchanged along with debounceTime() then it will not send the same request again Like if I type angular and takes a pause then after 500ms my request for angular has been hit and then I type some more string along with angular and immediately backspaced it and again cam back to angular then distinct untilchange() prevents to send the request again as the last request which was sent was sent on search term angular itself
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm.subscribe((res) => {
      console.log(res);
    })
  }
}
