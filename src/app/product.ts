export class Product {
    price: number;
    name: string;
    description: string;
    picSrc: string; // relative path for item's picture
    category: string;
    static id: number = 0;
    constructor(name?: string, price?: number, description?: string, picSrc?: string, category?: string){
        Product.id ++;
        this.description = description;
        this.name = name;
        this.picSrc = picSrc;
        this.price = price;
        this.category = category;
    }
}
