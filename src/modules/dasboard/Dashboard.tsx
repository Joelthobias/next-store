import style from './dashboard.module.css'

import React, { useEffect, useState } from 'react'
import { fetchProducts } from './services/fetchProducts'
interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
interface Products{
    productList:Product[]|null;
}
export const Dashboard = () => {
    const [err,setErr]=useState(false)
    const [products,setProdcts]=useState<Products[]>([]);
    useEffect(()=>{
        const getProducts=async ()=>{
            try{
                const products=await fetchProducts();
                console.log(products);
                
                setProdcts(products)
            }catch(error){
                setErr(true);
                console.log(error);
                
            }
        }
        getProducts()
    },[])
  return (
    <div>
        {err ? 
        err
        :
        <div className={style.container}>
            <div className={style.row}>
                {products&& products.length>0?(
                    products.map((product)=>(
                        <div key={product.title} className={style.card}>
                            <img src={product.image} alt={product.title} className={style.card_image} />
                            <div className={style.card_content}>
                                <h2 className={style.card_title}>{product.title}</h2>
                                <p className={style.card_description}>{product.description}</p>
                                <p className={style.card_price}>${product.price}</p>
                                <p className={style.card_category}>{product.category}</p>
                                <div className={style.card_rating}>
                                    <span className={style.card_rating_rate}>{product.rating.rate}</span>
                                    <span className={style.card_rating_count}>{product.rating.count}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ):(
                <h3>No products found</h3>
                
                )}
            </div>
            
        </div>
        }
    </div>

  )
}
