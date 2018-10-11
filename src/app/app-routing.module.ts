import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'contact-us' , component: ContactUsComponent},
	{ path: 'features' , component: FeaturesComponent},
	{ path: '' , component: HomeComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ContactUsComponent,FeaturesComponent,HomeComponent];