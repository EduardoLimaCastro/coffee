import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  public disabled = true;
  public enabled = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

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
    if (contador >= 0){
      this.butDisabled = false;
    }else{
      this.butDisabled = true;
    }
  }
  modalOpen(a: string,b: string,c: string,d: string,e: string){

  }
}
