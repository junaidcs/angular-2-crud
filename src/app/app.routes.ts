import { Routes } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'user/:userId',
        component: UserComponent
    }
];

export const routesComponents = [ TodoComponent, SearchComponent, UserComponent];