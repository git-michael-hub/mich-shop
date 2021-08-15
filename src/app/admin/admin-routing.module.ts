import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { AdminAuthGuardService } from 'src/app/admin/services/admin-auth-guard.service';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';

const routes: Routes = [
    { 
        path: 'admin/products/new', 
        component: ProductFormComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
