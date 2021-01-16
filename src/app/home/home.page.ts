import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router,public PostsService:PostsService) {}
  
  goToUpload(){
    this.router.navigate(['upload'])
  }
  goToHome(){
    this.router.navigate(['home'])
  }
  goToSearch(){
    this.router.navigate(['search'])
  }
  goToLive(){
    this.router.navigate(['live'])
  }
  goToProfile(){
    this.router.navigate(['profile'])
  }
  
  }
  
