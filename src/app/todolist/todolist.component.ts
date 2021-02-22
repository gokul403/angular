import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  value1:string=""
  array:any[]=[]
  array2:any[]=[]
  index:any
 
 


  constructor() { }

  ngOnInit(): void {
  }
  setNumber(event:any){
    this.value1=(event.target as HTMLInputElement).value
  }
  array1(){
    this.array.push(this.value1)
    console.log(this.array)
    
  }
  remove(a:any){
    this.index=this.array.indexOf(a)
    this.array.splice(this.index,1)
    console.log(this.array)
    
  }
  move(a:any){
    this.array2.push(a)
    this.remove(a)
  
  }
  remove2(a:any){
    this.index=this.array2.indexOf(a)
    this.array2.splice(this.index,1)
    console.log(this.array2)
  }

}
