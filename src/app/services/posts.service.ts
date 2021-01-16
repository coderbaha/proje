import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  posts=[

    {
    user:{
    username:"bahadır",
    resim:"./assets/icon/photo.jpg"

    },
    data:{
      resim:"./assets/icon/photo1.jpg",
      caption:"Snow",
      like:23,
      comments:12
    }
  
  },
  {
    user:{
    username:"ali",
    resim:"./assets/icon/photo2.jpg"

    },
    data:{
      resim:"./assets/icon/photo3.jpg",
      caption:"asd",
      like:2,
      comments:1
    }
  
  },
  {
    user:{
    username:"veli",
    resim:"./assets/icon/photo4.jpg"

    },
    data:{
      resim:"./assets/icon/photo5.jpg",
      caption:"Snow",
      like:23,
      comments:12
    }
  
  },
  {
    user:{
    username:"veli2",
    resim:"./assets/icon/photo6.jpg"

    },
    data:{
      resim:"./assets/icon/photo7.jpg",
      caption:"asd",
      like:2,
      comments:1
    }
  
  }
  

  ]

}
