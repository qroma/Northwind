import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';

import { PagerService } from '../services/index';
import { Employee } from '../Models/Employee.model';
import { ParamMap } from '@angular/router';

@Component({
    selector: 'search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css'],
})

export class SearchResult implements OnInit, OnChanges {
    constructor(private route: ActivatedRoute,private pagerService: PagerService, private router: Router, private http: Http) { }

    searchResults: Employee[];
   
    pager: any = {};

    pagedItems: any[];

    id: string;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        this.router.events.subscribe(event => {
            // Handle route change
            var test = event.toString();
            if (event.toString().indexOf('NavigationEnd') >= 0 ) {
                console.log("change!!!");
                this.ngOnChanges();
            }
            
        });

        this.http.get('/api/values/' + this.id)
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.searchResults = data;
                this.setPage(1);
            });      
    }
    
    ngOnChanges() {
        this.http.get('/api/values/' + this.id)
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.searchResults = data;
                this.setPage(1);
            });     
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.searchResults.length, page);

        // get current page of items
        this.pagedItems = this.searchResults.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
