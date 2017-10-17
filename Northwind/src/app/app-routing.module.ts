import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResult } from './searchResult/search-result.component'
import { MainComponent } from './main/main.component'

const routes: Routes = [
    { path: 'search-results/:id', component: SearchResult },
    { path: '', component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

