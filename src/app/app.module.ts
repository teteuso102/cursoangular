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
  MatProgressSpinnerModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskDialogComponent
  ],
  entryComponents: [
    TaskDialogComponent
  ],
  imports: [
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
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatToolbarModule

  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
