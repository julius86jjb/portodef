import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortofolioDetailsComponent } from './components/portofolio-details/portofolio-details.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'portofolio', component: PortfolioComponent },
    { path: 'item/:id', component: PortofolioDetailsComponent },
    // { path: 'education', component: EducationComponent },
    // { path: 'skills', component: SkillsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
