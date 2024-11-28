const CarritoCompra = require('./index');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
        carrito.agregarProducto({ nombre: 'Medias', precio: 1000 });
        carrito.agregarProducto({ nombre: 'Jeans', precio: 25000 });
    });

    it('Agregar un producto incrementa el tamaño del carrito', () => {
        expect(carrito.productos.length).toBe(2); //Agregamos la cantidad de artículos que queremos
    });

    it('Calcular total de la compra', () => {
        expect(carrito.calcularTotal()).toBe(26000); // Sumamos el total de las compras
    });

    it('Aplicar descuento al total de la compra', () => {
       expect(carrito.aplicarDescuento(10)).toBe(23400); // 10% de descuento
    });
});
