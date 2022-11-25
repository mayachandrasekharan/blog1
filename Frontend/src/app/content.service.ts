import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor( private http:HttpClient) { }
  getblogs(){
    return this.http.get("http://localhost:3002/Blogs");
  }
}
