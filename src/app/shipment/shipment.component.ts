import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent {
  shipments : any
  shipmentForm:any

  constructor(
    private api : ApiService,
    private builder : FormBuilder
  ){}

  ngOnInit(){
    this.getShipments()
  }

  getShipments(){
    this.api.getShipments().subscribe({
      next : (result :any)=>{
        console.log(result.data)
        this.shipments = result.data
      }
    })
  }

}
