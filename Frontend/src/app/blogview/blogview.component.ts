import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit {
 
  title:String = "Blog";
  Blog = [{
    bloggerId : '',
    bloggerName : '',
    imageUrl : '',
    blogTitle : '',
    blogDate : '',
    blogContent : ''
  }]
  constructor(private contentService: ContentService) { 

  }

  ngOnInit(): void {
    this.contentService.getblogs().subscribe((data:any)=>{
      this.Blog=JSON.parse(JSON.stringify(data));
    })
    }
  }