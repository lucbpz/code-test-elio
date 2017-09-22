import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DecodeComponent } from './pages/decode/decode.component';
import { InputScoresComponent } from './pages/scores/scores.component';
import { DataTableModule } from "angular2-datatable";
import { FormsModule }   from '@angular/forms';
import { ScoreService } from './services/scores.service';

const appRoutes: Routes = [
  { path: 'scores', component: InputScoresComponent },
  { path: 'decode', component: DecodeComponent },
  { path: '', redirectTo: '/scores', pathMatch: 'full'}
  
];  
@NgModule({
  declarations: [
    AppComponent,
    DecodeComponent,
    InputScoresComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
