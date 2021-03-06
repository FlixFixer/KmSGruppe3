import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskCardComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
