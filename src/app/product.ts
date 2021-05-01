export class Product {
    price: number;
    name: string;
    description: string;
    picSrc: string; // relative path for item's picture
    category: string;
    constructor(name?: string, price?: number, description?: string, picSrc?: string, category?: string){
        this.description = description;
        this.name = name;
        this.picSrc = picSrc;
        this.price = price;
        this.category = category;
    }
}
