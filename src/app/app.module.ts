import { TaskService } from './task.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {
  MatToolbarModule,
  MatListModule,
  MatLineModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule, MatSidenavModule, MatNativeDateModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskDialogComponent,
    MainNavComponent

  ],
  entryComponents: [
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatToolbarModule,
    LayoutModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSidenavModule

  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
