import { ServiceBase } from "./productService.base";

  export class productsServices extends ServiceBase {
    static getProducts = async () => {
        const productres = await fetch(this.geturl('/products'),{
          cache:'no-store'
        });
         const responec = await productres.json();
        return responec;
     
    }

    static getProductById = async ( id:number) => {
        const productres = await fetch(this.geturl('/products/' + id));
        const responenc = await productres.json();
       return responenc;
    
    }
}