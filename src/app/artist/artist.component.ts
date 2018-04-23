import { Component, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent  {

  private artist: any;
  private router :Router;
  tacks(){
this.router.navigate(['tracks'],{relativeTo: this.route});

  }

  ffff(){
    this.router.navigate(['albums'],{relativeTo: this.route}); 
  }
  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&callback=JSONP_CALLBACK`)
          .toPromise()
          .then(res => {
            console.log(res.json());
            this.artist = res.json().results[0];
            console.log(this.artist);
          });
    });
  }

}
