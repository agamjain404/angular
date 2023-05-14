import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(f: NgForm) {
  //   console.log('Submitted!');
  //   console.log(f);
  // }

  // Alternatively ngForm can be captured with the help of view child as well
  @ViewChild('f') form: NgForm

  onSubmit() {
    console.log(this.form);
  }
}