import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorizationGuard } from './guards/auth.guard';
import { RoomListResolverService } from './dashboard/room-list/room-list-resolver.service';
import { RoomDetailComponent } from './dashboard/room-detail/room-detail.component';
import { RoomDetailResolverService } from './dashboard/room-detail/room-detail-resolver.service';

/**
 * @author Harsh Mistry
 * 
 * Module for configuring supported routes throughout the system
 */
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard/:username',
    component: DashboardComponent,
    canActivate: [AuthorizationGuard],
    resolve: {
      roomList: RoomListResolverService
    },
    children: [
      {
        path: 'room-detail/:id',
        component: RoomDetailComponent,
        outlet: 'detail',
        resolve: {
          roomDetail: RoomDetailResolverService
        }
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
