import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor.component';
import { EditorService } from './services/editor.service';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
