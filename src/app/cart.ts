export class Cart {
    products: Array<any>;
    user: Array<any>;

    constructor(products, user) {
        this.products = products;
        this.user = user;
    }

    addProduct(product: any) {
        this.products.push(product);
    }

    deleteProduct(product: any) {
        let index = this.products.indexOf(product);
        if(index != -1)
            this.products.splice(index);
    }
}