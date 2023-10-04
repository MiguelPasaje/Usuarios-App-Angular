import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(
    private router: Router
  ){}

  irDashboard():void{
    //guardamos datos en el form o hacemos alguna logica
    //redireccionamos
    this.router.navigate(['/dashboard'])
  }

}
