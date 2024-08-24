import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spd-front';

  materias = [
    'Química', 'Matemáticas', 'Historia', 'Biología', 'Geografía', 'Física',
    'Literatura', 'Arte', 'Música', 'Educación Física', 'Informática', 'Economía'
  ];
}

