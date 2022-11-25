import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  valu:number=1502;

  Blog = [{
    bloggerId : '',
    bloggerName : '',
    imageUrl : '',
    blogTitle : '',
    blogDate : '',
    blogContent : ''
  }]

  sus:boolean = true;
  
  constructor(private contentService: ContentService) { }

  toggle(): void{
    this.sus = !this.sus;
    if(this.sus==false){
    this.valu=this.valu+1;
    }
    else{this.valu=this.valu-1;}
  }
  
// count(){
//  for( let i=1;i<=1;i++)
//  {
//    this.valu=this.valu+i;
//  }
 
// }
  ngOnInit(): void {
    this.contentService.getblogs().subscribe((data:any)=>{
      this.Blog=JSON.parse(JSON.stringify(data));
    })
  }

}
