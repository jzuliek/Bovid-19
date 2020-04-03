import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidInterface } from '../interfaces/covid-interface';
import { core } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  CovidRL = "https://covidtracking.com/api/states";

  state: CovidInterface[]=[];

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>(this.CovidRL);
  }

  getInfo(){
    this.getData().subscribe(
      x=>{
        for (const s of x ){
          this.state.push(s);

        }
        console.log(this.state);
      }
    )
  }
}
