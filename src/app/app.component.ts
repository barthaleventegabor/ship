// Név: Bartha Levente Gábor
// Készítés dátuma: 2025.10.18
// Csoport: II-N
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShipmentComponent } from './shipment/shipment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShipmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ship';
}
