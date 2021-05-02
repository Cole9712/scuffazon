export class Product {
    price: number;
    name: string;
    description: string;
    picSrc: string; // relative path for item's picture
    category: string;
    id: number;
    scuffed: boolean;
	rating: number;
	stars: number;
    static count: number = 0;
    constructor(name?: string, price?: number, description?: string, picSrc?: string, category?: string, scuffed?:boolean, rating?: number, stars?: number){
        Product.count ++;
        this.id = Product.count;
        this.description = description;
        this.name = name;
        this.picSrc = picSrc;
        this.price = price;
        this.category = category;
        this.scuffed = scuffed;
		this.rating = rating;
		this.stars = stars;
    }
}
