function seleccionarCarritoComidaUrbana(listadoCarritos, antojoCliente) {
    if (!listadoCarritos || listadoCarritos.length === 0) {
      return [];
    }
  
    const carritosSeleccionados = [];
  
    for (let indiceCarrito = 0; indiceCarrito < listadoCarritos.length; indiceCarrito++) {
      const carritoActual = listadoCarritos[indiceCarrito];
      
      if (carritoActual.calificacion >= 4.2 && carritoActual.distanciaMetros <= 800) {
        let contieneIngrediente = false;
  
        for (let indiceIngrediente = 0; indiceIngrediente < carritoActual.ingredientesDisponibles.length; indiceIngrediente++) {
          if (carritoActual.ingredientesDisponibles[indiceIngrediente] === antojoCliente) {
            contieneIngrediente = true;
            break;
          }
        }
  
        if (contieneIngrediente) {
          carritosSeleccionados.push(carritoActual.nombre);
        }
      }
    }
  
    return carritosSeleccionados;
  }