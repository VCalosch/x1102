import { Component, OnInit } from '@angular/core';
import { SelectsService } from '../../../servicios/selects.service';

@Component({
  selector: 'app-socorrista-general',
  templateUrl: './socorrista-general.component.html',
  styleUrls: ['./socorrista-general.component.css']
})
export class SocorristaGeneralComponent implements OnInit {

  Paises:string[]=[];

  constructor(private _selectsService:SelectsService) { }

  ngOnInit() {
    this.Paises=this._selectsService.getPaises();
  }

}
