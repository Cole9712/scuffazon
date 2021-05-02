import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './product';

@Pipe
( {
	name: 'search'
} )

export class SearchPipe implements PipeTransform 
{

	transform( products: Product[], keyword: string ): unknown 
	{
		return products.filter( p => p.name.toLowerCase().includes( keyword.toLowerCase() ) );
	}

}
