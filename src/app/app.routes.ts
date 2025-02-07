import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './Guard/auth.guard';
import { LoginComponent } from './common/login/login.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'about/:id',component:AboutComponent
    },
    {
        path:'about/:submenu/:id',component:AboutComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'customer',component:CustomerComponent,canActivate:[authGuard],
        children:[
            {
                path:'add',component:AddComponent
            },{
                path:'edit/:id',component:AddComponent
            }
        ]
    },{
        path:'**',component:StatusComponent
    }
];
