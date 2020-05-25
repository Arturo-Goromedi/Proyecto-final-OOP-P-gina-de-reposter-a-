//En este .js se almacenan las clases para crear objetos en el que se almacenen todos los ingredientes para cada receta

class Ingredientes3 {
    constructor(ingrediente1,cantidad1,unidad1,ingrediente2,cantidad2,unidad2,ingrediente3,cantidad3,unidad3) {
        this.ingrediente1 = ingrediente1,
        this.cantidad1 = cantidad1,
        this.unidad1 = unidad1
        this.ingrediente2 = ingrediente2,
        this.cantidad2 = cantidad2
        this.unidad2 = unidad2,
        this.ingrediente3 = ingrediente3,
        this.cantidad3 = cantidad3,
        this.unidad3 = unidad3;
    }
    
  }
  //Cada vez que se necesite un ingredinete extra se usará la clase con extensión que se requiera
class Ingredientes4 extends Ingredientes3 {
    constructor(ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
                   cantidad3, unidad3, ingrediente4, cantidad4, unidad4) {
//Super sirve para pasar valores de la clase a extender
        super(ingrediente1,cantidad1,unidad1,ingrediente2,cantidad2,unidad2,ingrediente3,cantidad3,unidad3);
        this.ingrediente4 = ingrediente4,
        this.cantidad4 = cantidad4,
        this.unidad4 = unidad4;
    }
  }
  class Ingredientes5 extends Ingredientes4 {
    constructor(ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
                   cantidad3, unidad3, ingrediente4, cantidad4, unidad4, ingrediente5, cantidad5, unidad5) {
        super (ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
            cantidad3, unidad3, ingrediente4, cantidad4, unidad4);
        this.ingrediente5 = ingrediente5,
        this.cantidad5 = cantidad5,
        this.unidad5 = unidad5;
    }
  }
  class Ingredientes6 extends Ingredientes5 {
    constructor(ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
                   cantidad3, unidad3, ingrediente4, cantidad4, unidad4, ingrediente5, cantidad5, unidad5, 
                   ingrediente6, cantidad6, unidad6) {
        super (ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
          cantidad3, unidad3, ingrediente4, cantidad4, unidad4, ingrediente5, cantidad5, unidad5);
        this.ingrediente6 = ingrediente6,
        this.cantidad6 = cantidad6,
        this.unidad6 = unidad6;
    }
  }
  class Ingredientes7 extends Ingredientes6 {
    constructor(ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
                   cantidad3, unidad3, ingrediente4, cantidad4, unidad4, ingrediente5, cantidad5, unidad5, 
                   ingrediente6, cantidad6, unidad6, ingrediente7, cantidad7, unidad7) {
        super (ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
          cantidad3, unidad3, ingrediente4, cantidad4, unidad4, ingrediente5, cantidad5, unidad5, 
          ingrediente6, cantidad6, unidad6);
        this.ingrediente7 = ingrediente7,
        this.cantidad7 = cantidad7,
        this.unidad7 = unidad7;
    }
  }
  class Ingredientes8 extends Ingredientes7 {
    constructor(ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
                   cantidad3, unidad3, ingrediente4, cantidad4, unidad4, ingrediente5, cantidad5, unidad5, 
                   ingrediente6, cantidad6, unidad6, ingrediente7, cantidad7, unidad7,
                   ingrediente8, cantidad8, unidad8) {
        super (ingrediente1, cantidad1, unidad1, ingrediente2, cantidad2, unidad2, ingrediente3,
          cantidad3, unidad3, ingrediente4, cantidad4, unidad4, ingrediente5, cantidad5, unidad5, 
          ingrediente6, cantidad6, unidad6, ingrediente7, cantidad7, unidad7);
        this.ingrediente8 = ingrediente8,
        this.cantidad8 = cantidad8,
        this.unidad8 = unidad8;
    }
  }
          //Cada clase puede crear array con ingrendientes y sus especificaciones
        //Para cada ingrediente deberás insertar: ingrediente, cantidad y unidad, esto dependiendo de la cantidad de ingredientes

 var cheesecake = new Ingredientes8("Galleta María molida", 100, "gramos", "Mantequilla sin sal", 130, "gramos",
                                   "Ázucar", 2, "cucharadas", "Queso crema", 4, "Paquetes", "Leche condensada", "1 y 1/4", "Taza",
                                   "Jugo de limón", "1/2", "Taza", "Extracto de vainilla", 1, "Cucharadita",
                                   "Grenetina en polvo", 3, "sobres");
//Cada clase puede crear array con ingrendientes y sus especificaciones
//Para cada ingrediente deberás insertar: ingrediente, cantidad y unidad, esto dependiendo de la cantidad de ingredientes
var flan= new Ingredientes5(" Huevo", 6, " Pieza/Piezas", " Leche condensada", 1, " Lata", " Leche evaporada", 1, " Lata",
                            " Vainilla", " Al gusto", " -", " Azucar (Para caramelo)", " Al gusto", " -"); 
//En este array se concentrarán todas las recetas
var recipies =[cheesecake, flan];
//Este objeto sería el que le enviaríamos al servidor para que trabaje con él
var flanJSON = JSON.stringify(flan);
var cheesecakeJSON = JSON.stringify(cheesecake);
//En caso de que sea necesario cambiar algo se llamaría al JSON, se cambia la información y luego se vuelve a enviar 
cheesecake = JSON.parse(cheesecakeJSON);
cheesecake.cantidad1=200;
//Y ahora se devolvería el objeto ya corregido para que se siga usando
cheesecakeJSON = JSON.stringify(cheesecake);