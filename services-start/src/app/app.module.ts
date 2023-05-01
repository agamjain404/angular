import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  // If we give services in this providers array then our whole application get the same instance of the service.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// This syntax will work same as we add services in provides array of app module but with this syntax services can loaded lazily behind the scenes and lead to better performance and loading speed.
// @Injectable({providedIn: 'root'})
// export class MyService { ... }
