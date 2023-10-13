import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Store } from '@ngrx/store';
import { group } from '@angular/animations';
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
    if (contador >= 4){
      this.butDisabled = false;
    }else{
      this.butDisabled = true;
    }
  }
  modalOpen(a: string,b: string,c: string,d: string,e: string){

    sessionStorage.setItem('group',a);
    sessionStorage.setItem('group1',b);
    sessionStorage.setItem('group2',c);
    sessionStorage.setItem('group3',d);
    sessionStorage.setItem('group4',e);

    if (e === 'Every week'){
      sessionStorage.setItem('valor','$14.00/ mo');
    }
    else if (e === 'Every 2 weeks'){
      sessionStorage.setItem('valor', '$26.00/ mo');
    }
    else{
      sessionStorage.setItem('valor', '$48.00/ mo')
    }
  }
}

export function openEditDialog(dialog: MatDialog,a: string,b: string,c: string,d: string,e: string){

  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  config.data = {

  }

  const dialogRef = dialog.open(ModalComponent, config)

  dialogRef.afterClosed();
}
