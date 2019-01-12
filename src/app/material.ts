import {MatMenuModule} from '@angular/material/menu';
import { 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule
} from '@angular/material'
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatOptionModule,
        
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule
    ]
  })
  export class MaterialModule { }