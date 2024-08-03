import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [

    { path: '' , redirectTo: 'home', pathMatch: 'full'},

    { path: 'home' , component:HomeComponent},
    { path: 'about' , component:AboutComponent},
    { path: 'product' , component:ProductComponent},
    { path: 'portfolio' , component:PortfolioComponent},
    { path: 'contact' , component:ContactComponent},
        { path:'**' , component:NotfoundComponent},




];
