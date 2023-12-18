import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface Balance{
   total_balance: number,
   monthly_payment_limit: number,
   payment_done_so_far: number,
   payment_done_percentage?: number
}
@Injectable({
  providedIn: 'root'
})
export class TotalBalanceService {

  constructor(private http : HttpClient) { }

  url: string = "https://1.api.fy23ey06.careers.ifelsecloud.com/";
  
  getData(){
       return this.http.get(this.url);
  }
}
