import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  title = 'Comments';
  greeting : boolean = true;
  star: boolean = true;
  Blog = [{
    blogComment : '',
    blogCommentPreson : '',
    blogComment1 : '',
    blogCommentPreson1 : '',
    blogComment2 : '',
    blogCommentPreson2 : ''
  }]

  constructor(private contentService: ContentService) { }
  press():void{
    this.greeting = ! this.greeting;
  }
  notfi():void{
    this.star = ! this.star;
  }

  ngOnInit(): void {
    this.contentService.getblogs().subscribe((data:any)=>{
      this.Blog=JSON.parse(JSON.stringify(data));
    })
  }

}
