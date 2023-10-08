import { Component } from '@angular/core';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  public disabled = true;
  public enabled = false;

  isDisabled: boolean = false;
  butDisabled: boolean = true;

  disable(){
    this.isDisabled = true;
  }
  enable(){
    this.isDisabled = false;
  }
  panelOpenState = false;

  step = 0;

  butenable(a: string,b: string,c: string,d: string,e: string){
    let contador: number = 0;
    if(a){
    contador++;
    }
    if(b){
    contador++;
    }
    if(c){
    contador++;
    }
    if(d){
    contador++;
    }
    if(e){
    contador++;
    }
    if (contador >= 4){
      this.butDisabled = false;
    }else{
      this.butDisabled = true;
    }
  }
}
