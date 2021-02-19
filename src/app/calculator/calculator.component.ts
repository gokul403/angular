
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1:any
  value2:any
  sum:any
  operator:string=""
  numbers:string=''
  setOperators(opr:any)
  {
    if(opr=="+")
    {
      this.operator='+'
      console.log(this.operator)
    }
    else if(opr=="-")
    {
      this.operator='-'
      console.log(this.operator)
    }
    else if(opr=="*")
    {
      this.operator='*'
      console.log(this.operator)
    }
    else if(opr=="/")
    {
      this.operator='/'
      console.log(this.operator)
    }
    else
    {
      console.log("undefined")
    }

  }
  setNumber(num:any)
  {
  if(this.operator=="")
  {
    this.value1=num
    console.log(this.value1)
  }
  else
  {
    this.value2=num
    console.log(this.value2)
  }



  }

  constructor() { }

  add(ok:any)
    {
     if(ok=='+') 
     {
    
      this.sum=parseInt(this.value1)+parseInt(this.value2)
      console.log(this.sum)
     }
     else if(ok=='-')
     {
       this.sum=parseInt(this.value1)-parseInt(this.value2)
       console.log(this.sum)
     }
     else if(ok=='*')
     {
       this.sum=parseInt(this.value1)*parseInt(this.value2)
       console.log(this.sum)
     }
     else if(ok=='/')
     {
       this.sum=parseInt(this.value1)/parseInt(this.value2)
       console.log(this.sum)
     }
    }




  ngOnInit():void {
  }
  setvalue1(event:any){
    this.value1=(event.target as HTMLInputElement).value
  }
  setvalue2(event:any){
    this.value2=(event.target as HTMLInputElement).value

}
setsum(event:any){
  this.sum=(event.target as HTMLInputElement).value
}

}

