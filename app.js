
const menu = () =>

{
    let total= 0;
while (true)
{
    
    alert ('Elija el producto que desee') ;
    let productos = '1. Mascaras | 2. Serum | 3. Vitamina C | 4. Bb Cream | 5. Gel de Seda | 6. Gel Despigmentante | 0. Salir';
    let opcion = Number(prompt(productos));
    
    
    switch (opcion)
    {
        case 1:
            alert('Mascaras, su valor es de $350 ');
            total += 350;            
            
        break;
        case 2:
            alert('Serum, su valor es de $1500 ');
             total += 1500;
             
        break;
        case 3:
            alert('Vitamina C, su valor es de $900 ');
             total += 900;
             
        break;
        case 4:
            alert('Bb Cream, su valor es de $2800 ');
             total += 2800;
             
        break;
        case 5:
            alert('Gel de Seda, su valor es de $1200 ');
             total += 1200;
             
        break;
        case 6:
            alert('Gel Despigmentante, su valor es de $1800 ');
             total += 1800;
             
        break;
        case 0;
        break;
       
        default:
            alert ('El producto elegido no se encuentra en stock, ingrese otro por favor')
        break;
    }
    if(opcion == 0)
    {
        alert('Finalizando compra');
        alert('El total de la compra es = $' + total);
        break;
    }
}

}
menu();

//importe = alert ('El total es= $ ' + precio * cantidad);
//let precio= 0;
    //let cantidad= 0;
    //cantidad = prompt('Ingrese la cantidad de productos a llevar:');
    //let importe;