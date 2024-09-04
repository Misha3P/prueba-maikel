import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './componets/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { UserFormComponent } from './componets/user-form/user-form.component';
import { PostListComponent } from './componets/post-list/post-list.component';
import { PostDetailsComponent } from './componets/post-details/post-details.component';
import { PostFormComponent } from './componets/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    PostListComponent,
    PostDetailsComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
