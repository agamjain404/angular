import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth-guard.service';

// Declare the routes which we are going to use in the application
// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'servers', component: ServersComponent },
//   // { path: 'users', component: UsersComponent },
//   // Dynamic parameter passing in user component 
//   // { path: 'users/:id/:name', component: UserComponent },
//   // Query Params and Fragments
//   // { path: 'servers/:id/edit', component: EditServerComponent },
//   // { path: 'servers/:id', component: ServerComponent },

//   // Adding Child routes 
//   // Add a children property to the particular object as an array of paths. You need to declare an router outlet for all the child route components in the parent route componet
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UserComponent },
//   ] },
//   { path: 'servers', component: ServersComponent, children: [
//     { path: ':id/edit', component: EditServerComponent },
//     { path: ':id', component: ServerComponent },
//   ] },

//   // Redirect a path which is not available to Page not Found component
//   { path: 'not-found', component: PageNotFoundComponent },
//   { path: '**', redirectTo: '/not-found'}

//   // To avoid errors while matching the path we can give pathMatch property which can be used to match the full path.
//   // Example :- { path: 'not-found', component: PageNotFoundComponent, pathMatch: 'full' }

// ]

// Post this moved complete router logic to a different file name app-routing.module.ts

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Register the routes inside this angular application
    // RouterModule.forRoot(appRoutes)

    // Adding complete route logic in this file
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
