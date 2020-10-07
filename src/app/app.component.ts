import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    PI: number = Math.PI;
    arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    salario = 1234.5;
    porcentaje = 0.234;
    fecha: Date = new Date();
    idioma = 'es';
    nombre = 'Capitán América';
    nombreDesordenado = 'jOsé SALDivAr cAstAñeDa';
    videoUrl = 'https://www.youtube.com/embed/VNg5S8dMNzA';
    activar = true;

    valorPromesa = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Llego la data');
        }, 4500);
    });

    heroe = {
        nombre: 'Logan',
        clave: 'Wolverine',
        edad: 500,
        direccion: {
            calle: 'Primera',
            casa: 20,
        },
    };
}
