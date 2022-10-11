import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  newsList = ()=>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=fa95a1e79013476e912f90b8d392f0bc')
  }

}
