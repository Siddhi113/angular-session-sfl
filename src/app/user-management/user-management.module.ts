import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './user-listing/user-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: "",
    children: [{
      path: "list",
      component: UserListingComponent
    }]
  }
]

@NgModule({
  declarations: [UserListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ]
})
export class UserManagementModule { }
