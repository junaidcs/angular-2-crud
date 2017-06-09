import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { TodoComponent } from './todo/todo.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { AnimationComponent } from './animation/animation.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
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
    },
    {
        path: 'animation',
        component: AnimationComponent
    },
];

export const routesComponents = [AnimationComponent, TodoComponent, SearchComponent, UserComponent];