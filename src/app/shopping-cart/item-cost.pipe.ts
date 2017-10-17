import { Pipe, PipeTransform } from '@angular/core';
import {CartItem} from "./cart"


@Pipe({
    name: 'itemCost'
})
export class ItemCostPipe implements PipeTransform {
    transform(item: CartItem,quantity?:number) {
        return item.product.price * item.quantity;
    }
}
