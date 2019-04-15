import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';


import { appRouting } from './app.routes';
import { PortofolioDetailsComponent } from './components/portofolio-details/portofolio-details.component';
import { FilterPortofolioPipe } from './pipes/filter-portofolio.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    PortfolioComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    PortofolioDetailsComponent,
    FilterPortofolioPipe,
    KeysPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    appRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
