import { useEffect, useState } from 'react';
import classes from '../../../../styles/pages/questions/react/Pagination.module.scss';
import axios from 'axios';
const Products=()=>{
    const[products, setProducts]=useState([]);
    const[page, setPage]=useState(1);

    useEffect(()=>{
        const fetchProducts= async ()=>{
               const { data : { products } } = await axios.get('https://dummyjson.com/products?limit=100')
               setProducts(products)
        }
        fetchProducts();
    },[])

    const setPageNumber=(page_num)=>{
       setPage(page_num)
    }
    return(
    <div className={classes.page_wrapper}>
     <div className={classes.container}>
     {
        products && products.length > 0 && products.slice(page * 10 -10 ,page *10).map((product)=>{
            return <div className={classes.card}  key={product.id}>
                <div className={classes.img}>
                <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className={classes.text}>
                  <p>{product.title}</p>
                </div>
            </div>
        })
      }
     </div>
   <div className={classes.pagination}>
   {
         [...Array(products.length/10)].map((_,idx)=>{
            return <span className={`${classes.pagination_num} ${page === idx + 1 ? classes.current_page : ''}`} onClick={()=>setPageNumber(idx+1)}>{idx+1}</span>
         })
    }
   </div>
    </div>
    )
}
export default Products;