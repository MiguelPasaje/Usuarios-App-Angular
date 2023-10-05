import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css'],
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;

  imgUrl: string = 'https://www.fayerwayer.com/resizer/j5t99xUsygsnO8VAhqzTEvzC9l8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg';
  firstName: string = '';
  email: string = '';
  id:number = 0

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id
    console.log(this.id,this.firstName,this.email);
  }
}
