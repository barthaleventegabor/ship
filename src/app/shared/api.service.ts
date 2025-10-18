import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host: string = "http://localhost:8000/api/"

  constructor(private http : HttpClient) { }

  getShipments(){
    const url = this.host + "shipments"
    return this.http.get(url)
  }

  addShipment(shipment :any){
    const url = this.host + "shipments"
    return this.http.post(url , shipment)
  }

}
