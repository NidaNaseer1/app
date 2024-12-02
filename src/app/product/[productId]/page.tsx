import React from 'react';
import { productsServices } from '@/app/services/product-service';
import style from "./details.module.css"
import { useRouter } from "next/navigation";

export default async function ProductDetailPage(props: any) {  
    const productId = props.params.productId;
    let product;
    if (productId) {
        product = await productsServices.getProductById (productId);
    }

    const renderRatingStars = (rate: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rate) {
                stars.push(<span key={i} className={style.starFilled}>★★</span>);
            } else {
                stars.push(<span key={i} className={style.starEmpty}>☆</span>);
            }
        }
        return stars;
    };
    

    return (
        <div className={style.main}>
            <img src={product.image} width={100} height={100} style={{ backgroundColor:"transparent"}} alt={product.title} />
            <div className={style.title}>{product.title}</div>
            <div className={style.category}>{product.description}</div>
            <div className={style.category}>{product.category}</div>
            <div className={style.price}>
                MRP: <span className={style.mrpSymbol}>₹</span>{product.price}
            </div>
            <div className={style.offerText}>Limited Time Offer!</div>
            <div className={style.rating}>
                {renderRatingStars(product.rating?.rate || 0)}
            </div>
            <div className={style.count}>
                {product.rating?.count} 
            </div>
            <button  className={style.buyButton}>Buy Now</button>
        </div>
    );
}