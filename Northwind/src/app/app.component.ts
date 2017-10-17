import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';

import { PagerService } from './services/index'
import { Employee } from './Models/Employee.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent  {
    constructor(private http: Http, private router: Router) { }

    searchValue = "";

    onClick($event) {
        this.router.navigate(['/search-results', this.searchValue]);
    }
    
}
