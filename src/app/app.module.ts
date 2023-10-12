import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';
import { MenuComponent } from './shared/menu/menu.component';
import { BoxesComponent } from './components/boxes/boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BoxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    PortifolioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
