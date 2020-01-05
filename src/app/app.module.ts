// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Directives imports
import { ScrollbarDirective } from './_directives/scrollbar.directive';
// Pipes imports
import { SearchPipe } from './_pipes/search.pipe';
// Application imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Notes imports
import { NotesComponent } from './notes/notes.component';

@NgModule({
    declarations: [
        // Directives
        ScrollbarDirective,
        // Pipes
        SearchPipe,
        // Application
        AppComponent,
        // Notes
        NotesComponent
    ],
    imports: [
        // Angular
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        // Application
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
