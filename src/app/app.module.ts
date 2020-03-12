import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './dashboard/user-detail/user-detail.component';
import { RoomListComponent } from './dashboard/room-list/room-list.component';
import { RoomDetailComponent } from './dashboard/room-detail/room-detail.component';
import { RoomInfoComponent } from './dashboard/room-detail/room-info/room-info.component';
import { MessageCenterComponent } from './dashboard/room-detail/message-center/message-center.component';
import { MessageListComponent } from './dashboard/room-detail/message-center/message-list/message-list.component';
import { MessageActionComponent } from './dashboard/room-detail/message-center/message-action/message-action.component';

/**
 * @author Harsh Mistry
 * 
 * App module for defining supported components throughout the system
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserDetailComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomInfoComponent,
    MessageCenterComponent,
    MessageListComponent,
    MessageActionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
