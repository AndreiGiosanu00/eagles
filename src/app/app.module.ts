import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageMirrorComponent } from './components/page-mirror/page-mirror.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditCodeComponent } from './components/edit-code/edit-code.component';
import { ActionsComponent } from './components/actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    PageMirrorComponent,
    MenuComponent,
    EditCodeComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
