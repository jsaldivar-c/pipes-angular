import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {
        // Pasamos la cadena recibida a minusculas
        value = value.toLocaleLowerCase();
        // Separamos la cadena en arreglo de strings ["jose","saldivar", "castañeda"]
        let nombres = value.split(' ');
        console.log(nombres);
        if (todas) {
            // Se crea un nuevo array con los resultados de la función, de cada string se toma la posicion 0 y
            // se convierte a mayusculas y se concatena el substring a partir de la posicion 1.
            nombres = nombres.map((nombre) => {
                console.log(nombre[0]);
                return nombre[0].toUpperCase() + nombre.substr(1);
            });
        } else {
            console.log(nombres[0][0]);
            // De la primer palabra se obtiene el primer caracter y se pasa a mayuscula y se concatena lo demas.
            // jose = J + ose;
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
            console.log(nombres.join(''));
        }
        return nombres.join(' ');
    }
}
