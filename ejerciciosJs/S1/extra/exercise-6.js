const goodProducts = [];
const badProducts = [];
const products = [
    {
        name: 'Gorra de rodilla',
        sellCount: 10
    }, {
        name: 'Pantalón de pana',
        sellCount: 302
    }, {
        name: 'Reloj de papel albal',
        sellCount: 23
    }, {
        name: 'Inpar de zapatos',
        sellCount: 6
    }];

for (let index = 0; index < products.length; index++) {
    products[index].sellCount > 20 ? goodProducts.push(products[index]) : badProducts.push(products[index])
}

console.log("Los productos más vendidos", goodProducts, "y los menos vendidos", badProducts);