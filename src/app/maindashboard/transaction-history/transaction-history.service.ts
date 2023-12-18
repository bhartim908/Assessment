import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Transaction{
  id: string,
      date: string,
      name: string,
      status: string,
      type: string,
      amount: number
}

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {
 
  constructor(private http : HttpClient) { }

  url: string = "https://1.api.fy23ey06.careers.ifelsecloud.com/";
  
  getData(){
       return this.http.get(this.url);
  }
}
