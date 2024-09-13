import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: ``
})
export class UsuariosComponent implements OnInit{


  public usuarios: Usuario[] = [];

  constructor(
    private usuariosServices: UsuariosService,
  ){}

  ngOnInit(): void {
    this.usuariosServices.cargarUsuarios().subscribe( usuarios => {
      console.log(usuarios)
      this.usuarios = usuarios;
    });
  }

}
