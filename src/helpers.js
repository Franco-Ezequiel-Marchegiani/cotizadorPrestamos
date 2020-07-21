export function calcularTotal(cantidad, plazo) {
     // Cantidades
     //0-1.000 = 25%
     //1.001-5.000 = 20%
     //5.001-10.000 = 15%
     //+10.000 = 10%

     let totalCantidad;
     if(cantidad <= 1000) {
          totalCantidad = cantidad * .25;
     } else if (cantidad > 1000 && cantidad <= 5000){
          totalCantidad = cantidad * .20;
     } else if (cantidad > 5000 && cantidad <= 10000){
          totalCantidad = cantidad * .15;
     } else {
          totalCantidad = cantidad * .10;
     }

     
     // Calcular el plazo
     // 3 = 5%
     // 6 = 10%
     // 12 = 15%
     // 24= 20%

     let totalPlazo = 0;
     switch(plazo) {
          case 3:
               totalPlazo = cantidad * .05;
               break;
          case 6:
               totalPlazo = cantidad * .10;
               break;
          case 12:
               totalPlazo = cantidad * .15;
               break; 
          case 24:
               totalPlazo = cantidad * .20;
               break;     
          default:
               break;                
     }

     return totalPlazo + totalCantidad + cantidad;
}