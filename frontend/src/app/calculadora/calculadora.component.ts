import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  title = 'Calculadora API';
  formGroup;

  ngOnInit() {
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private calculadoraService: CalculadoraService
  ) {
    this.formGroup = this.formBuilder.group({
      numeros: '',
    });
  }

  onSubmit(formData) {
    const numeros = formData.numeros
    var array = JSON.parse("[" + numeros + "]");
    const object = {numeros: array}
    this.calculadoraService.getCalculos(object).subscribe((item) => {
      this.toastr.success('Soma: ' + item.sum, 'Média: ' + item.average, {
        timeOut: 5000,
      })
    })
  }


}
