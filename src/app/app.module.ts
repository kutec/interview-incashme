import { NgModule } from "@angular/core";
import {
  BrowserModule
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { RoutingModule } from './routing.module';
import { MaterialModule } from "./material.module";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "users", component: UsersComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    MaterialModule
  ],
  declarations: [UsersComponent, BaseComponent],
  bootstrap: [BaseComponent]
})
export class AppModule {}
