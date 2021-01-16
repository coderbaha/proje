import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  username: string
  caption: string
  propic
  picture


  constructor(private postService: PostsService,private router: Router) { }
  
  ngOnInit() {
  }
  
  upload(){
    let post={
      user:{
        username:this.username,
        resim:this.propic
      },
      data:{
        resim:this.picture,
        caption:this.caption,
        like:0,
        comments:0
      }
    }
    this.postService.posts.unshift(post)
    this.router.navigate(['home'])    
  }
  newProPic(e){
    let file=e.target.files[0];
    const reader =new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=() =>{
    this.propic=reader.result;
    }
  }
  newPic(e){
    let file=e.target.files[0];
    const reader =new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=() =>{
    this.picture=reader.result;
    }
  }
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
