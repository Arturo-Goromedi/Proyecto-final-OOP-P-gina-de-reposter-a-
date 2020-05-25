//Función para crear contenido de una tabla partiendo de un objeto
function printIngFlan(ingredientes) { 
    //Objecto.values() lo utilizo para pasar el bojeto a que sea un array de sus propiedadess
    var nuevoArray = Object.values(ingredientes)
    var txtPC="";
    for (let i = 0;i<nuevoArray.length;i+=3) {
            let x = i+1;
            let y = i+2;
            txtPC+= "<tr><td>" + nuevoArray[i] + "</td><td>" + nuevoArray[x] + "</td><td>" + nuevoArray[y] + "</td></tr>";
            
    }
    document.getElementById("IngredientesFlan").innerHTML = txtPC;
    
}
//Función para imprimir los valores de un objeto en forma de tabla
function printIngCheesecake(ingredientes) { 
    //Objecto.values() lo utilizo para pasar el bojeto a que sea un array de sus propiedadess
    var nuevoArray = Object.values(ingredientes)
    var txtPC="";
    for (let i = 0;i<nuevoArray.length;i+=3) {
            let x = i+1;
            let y = i+2;
            txtPC+= "<tr><td>" + nuevoArray[i] + "</td><td>" + nuevoArray[x] + "</td><td>" + nuevoArray[y] + "</td></tr>";
            
    }
    document.getElementById("IngredientesCheesecake").innerHTML = txtPC;
    
}