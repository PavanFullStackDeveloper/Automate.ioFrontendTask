// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Notes imports
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
    { path: 'Notes', component: NotesComponent },
    { path: '**', redirectTo: '/Notes', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
