import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'


import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule
    ]
  })
  export class MaterialModule { }