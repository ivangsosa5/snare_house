import { useContext } from "react";
import { filtersContext } from "../context/filtersContext";

export function useFilters(){

    const {sortBy, setSortBy, filter, setFilter} = useContext(filtersContext)

    const sortProduct = (products)=>{
            switch (sortBy) {
                case 'recommended':
                    return filterProduct(products)
                    break;
                case 'increasing':
                    const increasing = products.sort((a,b)=>{
                        if (a.price < b.price) {
                            return -1
                        }
                        if (a.price > b.price){
                            return 1
                        }
                        return 0
                    })
                    return filterProduct(increasing)
                    break;
                case 'decreasing':
                    const decreasing = products.sort((a,b)=>{
                        if (a.price > b.price) {
                            return -1
                        }
                        if (a.price < b.price){
                            return 1
                        }
                        return 0
                    })
                    return filterProduct(decreasing)
                    break;
            }
        
    }

    const filterProduct = (products)=>{

        return products.filter(product=>{
            return(
                filter === 'all' || product.feature === filter 
            )
        })
    }

    return { setSortBy, sortProduct, setFilter, filter}
}