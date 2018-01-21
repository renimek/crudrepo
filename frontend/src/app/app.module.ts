import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTabsModule,
  MatSortModule,
  MatGridListModule,
  MatIconModule,
  MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataService } from './data.service';
import { RegisterService } from './register/register.service';
import { LoginService} from './login/login.service';
import { AuthService} from './auth.service';
import { AddnewComponent } from './addnew/addnew.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddnewComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatSortModule,
    MatGridListModule,
    MatIconModule,
    NgDragDropModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [DataService, RegisterService, LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
