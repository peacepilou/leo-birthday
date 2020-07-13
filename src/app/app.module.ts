import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './buttons/buttons.component';
import { Buttons2Component } from './buttons2/buttons2.component';
import { Buttons3Component } from './buttons3/buttons3.component';
import { Buttons4Component } from './buttons4/buttons4.component';
import { Buttons5Component } from './buttons5/buttons5.component';
import { FormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    Buttons2Component,
    Buttons3Component,
    Buttons4Component,
    Buttons5Component
  ],
  entryComponents: [ButtonsComponent, Buttons2Component, Buttons3Component, Buttons4Component, Buttons5Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 2000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
