import { HomeModule } from './pages/home/home.module';
//import { ContactModule } from './pages/contact/contact.module';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './pages/assets/assets.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AssetsModule } from './pages/assets/assets.module';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent},
  // { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule'},
  // { path: 'assets', loadChildren: 'app/pages/assets/assets.module#AssetsModule'}
  { path: 'home', component: HomeComponent },
  //{ path: 'contact', component: ContactComponent },
  { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule'},
  { path: 'assets', component: AssetsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HomeModule, AssetsModule
  ],
  declarations: [PageNotFoundComponent],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
