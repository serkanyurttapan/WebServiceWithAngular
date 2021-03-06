import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
 import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import {Routes,RouterModule} from '@angular/router'
 
 
const routes:Routes = [
  {path:"posts",component:PostComponent},
  {path:"",redirectTo:"posts",pathMatch:"full"},
  {path:"customers",component:PostComponent},
  {path:"posts/:userid",component:PostComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 