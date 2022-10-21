import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  //para atrapar el valor que he pasado por url desde el ts del componente start
  //inyecto la clase ActivatedRoute y agrego la sentencia route.snapshot.paramMap.get('valor') //ha de coincidir con el que puse en routing tras/:
  bmi: number;
  Resultado: string = 'Resultado';
  Interpretacion: string = 'Interpretacion';

  constructor(private route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('valor')!; //!evita error nulos, + parsea string a number
  }

  ngOnInit(): void {
    this.getResultado();
  }
  getResultado() {
    if (this.bmi >= 25) {
      this.Resultado = 'Peso excesivo';
      this.Interpretacion = `Intenta hacer más ejercicio y reducir grasas`;
    } else if (this.bmi >= 18.5) {
      this.Resultado = 'Normal';
      this.Interpretacion = 'Sigue así. Buen trabajo!';
    } else {
      this.Resultado = 'Peso bajo';
      this.Interpretacion = 'Puedes comer más, aprovecha!';
    }
  }
}
