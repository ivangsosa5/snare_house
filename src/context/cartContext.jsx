import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartProvider({children}){

    const [cartList, setCartList] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)


    const isInCartIndex = (id)=>{
        return cartList.findIndex(item=>item.id === id)
    }

    const addItem = ({id, name, price, quantity, pictureUrl, color, colorName})=>{
        
            const finded = isInCartIndex(id)
            if(finded >= 0){
                const newCart = structuredClone(cartList)
                newCart[finded].quantity += quantity
                let presentColor = newCart[finded].colorName
                if(presentColor != colorName){
                    presentColor = 'holi'
                }else{
                    presentColor = 'bye'
                }
                setCartList(newCart)
                setCartCount(cartCount + quantity)
                setSubTotal(subTotal + price)
                
                }else{
                    setCartList(prevState=>([...prevState, {id, name, price, quantity, pictureUrl, color, colorName}]))
                    setCartCount(cartCount + quantity)
                    setSubTotal(subTotal + price)
                }

        }
    
    const removeItem = ({id, quantity, price})=>{

            const cartListFiltered = cartList.filter(cartList => cartList.id !== id)
            setCartList(cartListFiltered)
            setCartCount(cartCount - quantity)
            setSubTotal(subTotal - price*quantity)
    
        }
    
    const clearItems = ()=>{
            setCartList([])
            setCartCount(0)
            setSubTotal(0)
        }

    return (

        <cartContext.Provider value={{cartList, addItem, removeItem, clearItems, cartCount, subTotal}}>
            {children}
        </cartContext.Provider>
    )

    }








