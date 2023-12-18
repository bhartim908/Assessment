import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface MoneyStatistics{
  value:number;
  trend:number;
  trend_color:string;
}
@Injectable({
  providedIn: 'root'
})
export class MoneyStatisticsService {

  constructor(private http : HttpClient) { }

  url: string = "https://1.api.fy23ey06.careers.ifelsecloud.com/";
  
  getData(){
       return this.http.get(this.url);
  }

}
