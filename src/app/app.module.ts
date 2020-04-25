import { NgModule } from "@angular/core";
import {
  BrowserModule
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

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
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  declarations: [UsersComponent],
  bootstrap: [UsersComponent]
})
export class AppModule {}
