import { Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LearnComponent } from './main/learn/learn.component';
import { PracticeComponent } from './main/practice/practice.component';
import { ChallengeComponent } from './main/challenge/challenge.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'practice', component: PracticeComponent },
    { path: 'challenge', component: ChallengeComponent },
];
