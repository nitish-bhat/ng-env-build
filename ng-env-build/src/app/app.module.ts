import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DomainService } from '../app/_services/domain/domain.svc';
import { UserService } from '../app/_services/user/user.svc';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [
    DomainService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
