import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page',
    },
    {
        path: 'about',
        component: About,
        title: 'About Me',
    },
    {
        path: 'projects',
        component: Projects,
        title: 'Projects',
    }
];
