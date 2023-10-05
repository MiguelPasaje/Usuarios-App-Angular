import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  id: number;
  Name: string = '';
  email: string = '';
  urlImg: string = '';
  phone: string = '';
  gender: string = '';
  loading:boolean = true
  constructor(
    private aRoute: ActivatedRoute,
    private userService: UsuarioService
  ) {
    this.id = +aRoute.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    console.log(this.id);
    this.getUsuario();
  }

  getUsuario(): void {
    this.userService.getUsuario(this.id).subscribe((res) => {
      console.log(res.data);
      this.Name = res.data.name
      this.email = res.data.email
      this.gender = res.data.gender
      console.log(this.Name,this.email,this.gender);
      this.loading = false

    });
  }
}
