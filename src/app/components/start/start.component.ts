import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

edad=25;
peso=60;
altura=180;
sexo='masculino';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

cambiarAltura(event:any){
  //console.log({event});
  this.altura =  event.target.value;

}

femenino() {
  this.sexo='femenino';

}
masculino() {
  this.sexo='masculino';
}
calcularBMI(event:Event){
  const BMI=this.peso / Math.pow(this.altura/100, 2);
  console.log(BMI.toFixed(2));  //toFixed(2) redondea a dos dígitos los decimales
  this.router.navigate(['/result', BMI.toFixed(2)]);
}
}
