import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/main-view/navbar/navbar.component';
import { FolderViewComponent } from './components/main-view/folder-view/folder-view.component';
import { FooterComponent } from './components/main-view/footer/footer.component';
import { TopbarComponent } from './components/main-view/topbar/topbar.component';
import { MainViewComponent } from './components/main-view/main-view.component';

import { FtpHandlerService } from './services/ftp-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FolderViewComponent,
    FooterComponent,
    TopbarComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FtpHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
