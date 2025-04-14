import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, CircleChevronLeft, CircleChevronRight, LucideAngularModule, Maximize2, Menu, MoveDown, MoveRight, MoveUpRight} from 'lucide-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './@components/hero/hero.component';
import { OurServicesComponent } from './@components/our-services/our-services.component';
import { PerformanceComponent } from './@components/performance/performance.component';
import { TrusteeComponent } from './@components/trustee/trustee.component';
import { TestimonialComponent } from './@components/testimonial/testimonial.component';
import { RecentblogComponent } from './@components/recentblog/recentblog.component';
import { ReadaboutusComponent } from './@components/readaboutus/readaboutus.component';
import { FooterComponent } from './@shared/footer/footer.component';
import { VybecashComponent } from './@components/vybecash/vybecash.component';
import { HomeComponent } from './@components/home/home.component';
import { AfreximComponent } from './@components/afrexim/afrexim.component';
import { OptivaComponent } from './@components/optiva/optiva.component';
import { OverviewComponent } from './@shared/overview/overview.component';
import { ScopeComponent } from './@shared/scope/scope.component';
import { FeaturesComponent } from './@shared/features/features.component';
import { ResultsComponent } from './@shared/results/results.component';
import { OtherComponent } from './@shared/other/other.component';
import { OptivascopeComponent } from './@components/optivascope/optivascope.component';
import { HeaderComponent } from './@shared/header/header.component';
import { ButtonComponent } from './@shared/button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    OurServicesComponent,
    PerformanceComponent,
    TrusteeComponent,
    TestimonialComponent,
    RecentblogComponent,
    ReadaboutusComponent,
    FooterComponent,
    VybecashComponent,
    HomeComponent,
    AfreximComponent,
    OptivaComponent,
    OverviewComponent,
    ScopeComponent,
    FeaturesComponent,
    ResultsComponent,
    OtherComponent,
    OptivascopeComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({Maximize2,Menu,ArrowDown,MoveUpRight,ArrowRight,MoveRight,ChevronLeft,ChevronRight}),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
