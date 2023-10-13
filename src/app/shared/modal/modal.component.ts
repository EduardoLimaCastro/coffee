import { group } from '@angular/animations';
import { SubscribeComponent } from './../../pages/subscribe/subscribe.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  drink:string ="";
  type: string ="";
  much: string ="";
  grind: string ="";
  long: string ="";

  constructor(){}

  ngOnInit(): void {

  }
  getGroup(){
    return sessionStorage.getItem('group');
  }
  getGroup1(){
    return sessionStorage.getItem('group1');
  }
  getGroup2(){
    return sessionStorage.getItem('group2');
  }
  getGroup3(){
    return sessionStorage.getItem('group3');
  }
  getGroup4(){
    return sessionStorage.getItem('group4');
  }
  getValor(){
    return sessionStorage.getItem('valor');
  }
}
