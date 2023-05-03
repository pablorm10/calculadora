import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-component',
  templateUrl: './calculadora-component.component.html',
  styleUrls: ['./calculadora-component.component.css']
})
export class CalculadoraComponentComponent implements OnInit {

  num1:string = "";
  num2:string = "";
  changeNumber:boolean = true;

  num1m:number = 0;
  num2m:number = 0;

  operator:string;

  result:number;
  operation:string;

  checkResult:boolean = false;

  CheckOperator:boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.result = 0;
    this.operation = "0";
  }

  addNumber(numX:string){

    if(this.changeNumber){

      if(this.checkResult){
        this.num1 = "";
        this.operation = "";
        this.checkResult = false;
      }

    this.num1 = this.num1+numX;
    this.operation = this.num1;
    }else{
      this.num2 = this.num2+numX;
      this.operation = this.num1+ this.operator + this.num2;
    }
  }

  selectOperator(operator:string){
    if(!this.CheckOperator){
     this.operator = operator;
     this.operation += operator;
     this.changeNumber = false;
     this.CheckOperator = true;
    }else{
      this.getResult();
    }
  }

  getResult(){
    this.num1m =+ this.num1;
    this.num2m =+ this.num2;
    if(this.operator == '+'){
      this.result = this.num1m + this.num2m;
      this.operation = this.result.toString();
    }else if(this.operator == '-'){
      this.result = this.num1m - this.num2m;
      this.operation = this.result.toString();

      }else if(this.operator == 'x'){
        this.result = this.num1m * this.num2m;
        this.operation = this.result.toString();
      }else if(this.operator == '/'){
        if (this.num2m == 0){
          this.operation = "Operación incorrecta";

        }else{
        this.result = this.num1m / this.num2m;
        this.operation = this.result.toString();
        }
      }

    this.num1 = this.result.toString();
    this.num2 = "";
    this.checkResult = true;
    this.changeNumber = true;
    this.CheckOperator = false;
  }

  clear(){
    this.operation = "0";
    this.num1 = "";
    this.num2 = "";
    this.changeNumber = true;
    this.operator = "";
    this.num1m  = 0;
    this.num2m = 0;
    this.checkResult = false;
  }

}
