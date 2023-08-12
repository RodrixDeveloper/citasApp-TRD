import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-cita',
  templateUrl: './list-cita.component.html',
  styleUrls: ['./list-cita.component.css'],
})
export class ListCitaComponent {
  @Input() listadoCita: any;
  @Output() deleteCita = new EventEmitter<number>();
  // eliminarCita(index: number) {
  //   this.listadoCita[index].eliminada = true;

  //   const element = document.querySelector(`.card[data-index="${index}"]`);
  //   if (element) {
  //     element.classList.add('animate__backOutRight');

  //     element.addEventListener('animationend', () => {
  //       this.deleteCita.emit(index);
  //     });
  //   }
  // }

  eliminarCita(index: number) {
    this.deleteCita.emit(index);
  }
}
