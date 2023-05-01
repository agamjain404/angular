import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "./auth-guard.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // Authenticating Child Routes
    { path: 'users',  canActivateChild: [AuthGaurd],  component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ] },
    // Authenticating Parent Routes
    { path: 'servers', canActivate: [AuthGaurd], component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent },
    ] },
    // Passing static data with the route
    { path: 'not-found', component: PageNotFoundComponent,  data: { message: 'Static data!!!' } },
    { path: '**', redirectTo: '/not-found'}
  ];

@NgModule({
    // Importing routerModule and intialising Routes
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    // exporting routerModule with initialised routes from this file and then importing this particular file inside app module make initialising all the routes in angular application
    exports: [RouterModule]
})
export class AppRoutingModule {

}