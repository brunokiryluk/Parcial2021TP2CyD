 
/**
 * Con el objeto de inventario, se pide desarrollar una function que reciba como parametro
 * el articulo (shoes, socks, shirts, pants) y una cantidad. Si la cantidad es menor o igual a la cantidad 
 * del inventario, se actualiza el objeto disminuyendo la cantidad y se retorna el codigo 200 que significa 'Venta exitosa'. 
 * Si la cantidad es mayor al stock existente, no se actualiza el objeto y se retorna el codigo 500 'Imposible de realizar la venta'
 * 
 */

 const inventory = {
    shoes: 10,
    socks: 6,
    shirts: 10,
    pants: 5,
  }

const sale = function (article, cant) {
  let isOk;
  switch (article) {
    case 'shoes':
      if (cant <= inventory.shoes) {
        inventory.shoes = inventory.shoes - cant
        isOk = true;
      } else {
        isOk = false
      }
    break;
    case 'socks':
      if (cant <= inventory.socks) {
        inventory.socks = inventory.socks - cant
        isOk = true;
      } else {
        isOk = false
      }
    break; 
    case 'shirts':
      if (cant <= inventory.shirts) {
        inventory.shirts = inventory.shirts - cant
        isOk = true;
      } else {
        isOk = false
      }
    break; 
    case 'pants':
      if (cant <= inventory.pants) {
        inventory.pants = inventory.pants - cant
        isOk = true;
      } else {
        isOk = false
      }
    break;   
    default:
      break;
  }
  if (isOk) {
    return 200
  } else {
    return 500
  }
}

// TESTS (no modificar)
console.log(sale('shoes',8) === 200 && inventory.shoes === 2);
console.log(sale('shoes',3) === 500 && inventory.shoes === 2);
console.log(sale('pants',5) === 200 && inventory.pants === 0)






