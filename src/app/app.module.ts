import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { MainComponent } from './layouts/main/main.component';
import { TopbarComponent } from './shared/topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
