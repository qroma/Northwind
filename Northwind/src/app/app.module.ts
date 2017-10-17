import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/main.component';
import { SearchResult } from './searchResult/search-result.component';
import { PagerService } from './services/index';

@NgModule({
    declarations: [
        AppComponent, MainComponent, SearchResult
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [PagerService],
    bootstrap: [AppComponent]
})

export class AppModule { }
