import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';

import { StoreModule } from '@ngrx/store'
import { todoReducer } from './todo/todo.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { Appreducers } from './app.reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoFooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(
      Appreducers
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
