import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { fetchProduct } from './services/fetchProduct';
import style from './id.module.css'
import { Navbar } from '@/modules/app/components/navbar/navbar';

const product = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchPro = async () => {
            try {
                const res = await fetchProduct(id)
                setProduct(res)
                // console.log(res);

            } catch (err) {
                console.log(err);

            }
        }
        fetchPro()
    }, [id])

    return (
        <div>
            <Navbar/>
            <div className={style.container}>
                <img className={style.product_image} src={product.image} alt="Product Image" />
                <div className={style.product_des}>

                    <h2 className={style.product_title}>{product.title}</h2>
                    <p className={style.product_price}>${product.price}</p>
                    <p className={style.product_category}>{product.category}</p>
                    <p className={style.product_description}>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default product