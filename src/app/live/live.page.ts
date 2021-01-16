import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage implements OnInit {

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

  ngOnInit() {
  }

}
