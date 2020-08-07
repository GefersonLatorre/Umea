import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PanelFeatureComponent } from './panel-feature/panel-feature.component';
import { FeatureFormComponent } from './panel-feature/feature-form/feature-form.component';
import { FeatureComponent } from './panel-feature/feature/feature.component';
import { ColorListHoodComponent } from './panel-feature/color-list-hood/color-list-hood.component';
import { ColorListBodyComponent } from './panel-feature/color-list-body/color-list-body.component';
import { ColorFormComponent } from './panel-feature/color-form/color-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelFeatureComponent,
    FeatureFormComponent,
    FeatureComponent,
    ColorListHoodComponent,
    ColorListBodyComponent,
    ColorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
