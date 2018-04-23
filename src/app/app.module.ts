



import { AppComponent, MyDialog, Counter }  from './app.component'
import { SearchitemComponent } from './searchitem/searchitem.component';
import { HomeComponent } from './home/home.component';
import { AppArtistTrackListComponent } from './app-artist-track-list/app-artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistComponent } from './artist/artist.component';


import {NgModule, Component, Injectable} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { SearchService } from './search.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchitemComponent,
    HomeComponent,
    AppArtistTrackListComponent,
    ArtistAlbumListComponent,
    ArtistComponent,
    MyDialog, Counter
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    JsonpModule,
    
    RouterModule.forRoot([
      
      {path: 'find', redirectTo: 'search'},
      {path: 'home', component: HomeComponent},
      {path: 'search', component: SearchitemComponent},
    
      {path: '**', component: ArtistComponent},
      {path: '', component: AppComponent}
    ],{useHash: true}),
    RouterModule.forChild([{
      path: '',
      component: ArtistComponent,
    
      children: [
        
        {path: 'tracks', component: AppArtistTrackListComponent},
        {path: 'albums', component: ArtistAlbumListComponent},
      ]
    }]),
  ],
   
 
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
 }
