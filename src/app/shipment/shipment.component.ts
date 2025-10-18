// Név: Bartha Levente Gábor
// Készítés dátuma: 2025.10.18
// Csoport: II-N

import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    this.shipmentForm = this.builder.group({
      shipmentId :"",
      sentDate :"",
      endDate :"",
      addressee :"",
      targetCity :""
    })
  }

  getShipments(){
    this.api.getShipments().subscribe({
      next : (result :any)=>{
        console.log(result.data)
        this.shipments = result.data
      }
    })
  }

  addShipment(){
    const newShipment = {
      shipmentId : this.shipmentForm.value.shipmentId ,
      sentDate : this.shipmentForm.value.sentDate ,
      endDate : this.shipmentForm.value.endDate ,
      addressee : this.shipmentForm.value.addressee ,
      targetCity : this.shipmentForm.value.targetCity 
    }
    this.api.addShipment(newShipment).subscribe({
      next : (result) =>{
        this.getShipments()
        this.shipmentForm.reset()
      }
    })
  }

}
