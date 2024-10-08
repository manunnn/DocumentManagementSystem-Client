import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { RegisterComponent } from './core/auth/pages/register/register.component';
import { FolderComponent } from './features/folder/pages/folder.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { authGuard } from './core/auth/guards/auth.guard';
import { roleGuard } from './core/auth/guards/role.guard';
import { DocumentComponent } from './features/document/pages/document.component';
import { UserComponent } from './features/user/pages/user.component';
import { AdminComponent } from './features/admin/pages/admin.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/unauthorized.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[authGuard,roleGuard],
        data: { role: ['User' ,'Admin'] }

    },
    {
        path: 'workspace',
        component: FolderComponent,
        canActivate:[authGuard,roleGuard],
        data: { role: ['User' ,'Admin'] }

    },
    {
        path: 'document/:folderId',
        component: DocumentComponent,
        canActivate:[authGuard,roleGuard],
        data: { role: ['User' ,'Admin']  }

    },
    {
        path: 'shared-directories',
        component: FolderComponent,
        canActivate:[authGuard,roleGuard],
        data: { role: ['User' ,'Admin']  }
    },
    {
        path: 'profile',
        component: UserComponent,
        canActivate:[authGuard,roleGuard],
        data: { role: ['User' ,'Admin']  }

    },
    {
        path: 'get-all-users',
        component: AdminComponent,
        canActivate:[authGuard,roleGuard],
        data: { role: ['Admin']  }

    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    { // Redirect to login by default
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    } ,
    { 
        path: 'unauthorized',
        component: UnauthorizedComponent
    } ,
    { //Wildcard
        path:'**',
        component: NotFoundComponent
    }

];