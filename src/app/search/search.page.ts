import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  groups: Array<any>;
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
    this.groups = [
      {
        hasFeature: true,
        items: [
          {
            id: 1,
            isFeatured: true,
          },
          {
            id: 2,
            isFeatured: false,
          },
          {
            id: 3,
            isFeatured: false,
          },
        ]
      }, {
        hasFeature: false,
        items: [
          {
            id: 4,
          },
          {
            id: 5,
          },
          {
            id: 6,
          },
          {
            id: 7,
          },
          {
            id: 8,
          },
          {
            id: 9,
          },
        ]
      }, {
        hasFeature: true,
        items: [
          {
            id: 10,
            isFeatured: false,
          },
          {
            id: 11,
            isFeatured: false,
          },
          {
            id: 12,
            isFeatured: true,
          },
        ]
      }, {
        hasFeature: false,
        items: [
          {
            id: 13,
          },
          {
            id: 14,
          },
          {
            id: 15,
          },
          {
            id: 16,
          },
          {
            id: 17,
          },
          {
            id: 18,
          },
        ]
      }
    ]
  }

  isBigThumbnail(index: number) {
    return [1, 10].includes(index);
  }

}
