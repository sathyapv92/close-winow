import { Component, OnInit } from '@angular/core';
import { SearchService, } from '../search.service';

import{ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.css']
})
export class SearchitemComponent implements OnInit {
  ngOnInit(): void {
    
  }

  private loading: boolean = false;

  constructor(private itunes: SearchService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['term']) {
        this.doSearch(params['term'])
      }
    });

 

}
doSearch(term: string) {
  this.loading = true;
  this.itunes.search(term).then(_ => this.loading = false)
}

onSearch(term: string) {
  this.router.navigate(['search', {term: term}]);
}
}
