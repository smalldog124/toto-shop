import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddCustomerStoresComponent } from './add-customer-stores/add-customer-stores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SummarizeComponent } from './summarize/summarize.component';
import { CustomerStoreComponent } from './customer-store/customer-store.component';

const appRoutes: Routes=[
  {path:'', component: SummarizeComponent},
  {path:'addCoustomerShop',component:AddCustomerStoresComponent},
  {path:'CoustomerShop',component:CustomerStoreComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddCustomerStoresComponent,
    MainNavComponent,
    SummarizeComponent,
    CustomerStoreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
