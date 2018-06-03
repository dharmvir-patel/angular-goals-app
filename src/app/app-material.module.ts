import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule
  ],
})
export class AppMaterialModule { }