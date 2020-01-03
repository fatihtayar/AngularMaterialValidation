import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxSelectBoxModule,
         DxCheckBoxModule,
         DxTextBoxModule,
         DxDateBoxModule,
         DxButtonModule,
         DxValidatorModule,
         DxValidationSummaryModule} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DevextremeComponent } from './devextreme/devextreme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialComponent } from './material/material.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule, MatButton} from '@angular/material';
import { MatCheckboxModule} from '@angular/material';
import { MatRadioModule} from '@angular/material/radio';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';




@NgModule({
   declarations: [
      AppComponent,
      BootstrapComponent,
      DevextremeComponent,
      MaterialComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      DxSelectBoxModule,
      DxCheckBoxModule,
      DxTextBoxModule,
      DxDateBoxModule,
      DxButtonModule,
      DxValidatorModule,
      DxValidationSummaryModule,
      BrowserAnimationsModule,

      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatCheckboxModule,
      MatRadioModule,
      MatIconModule,
      MatButtonModule
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
