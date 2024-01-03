import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCloseOptions } from '@angular/cdk/dialog';
@Component({
  selector: 'app-dialog-ar',
  templateUrl: './dialog-ar.component.html',
  styleUrls: ['./dialog-ar.component.css']
})
export class DialogArComponent {
  constructor(public  dialog : MatDialog){}
  openDialog(){
    this.dialog.open(DialogArComponent,{
    })
  }
  getValue(){
    this.dialog.open(DialogArComponent,{
    })
  }
}
