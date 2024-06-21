import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartProvider({children}){

    const [cartList, setCartList] = useState(()=>{
        const cartFromStorage = window.localStorage.getItem('cartStorage')
        return cartFromStorage ? JSON.parse(cartFromStorage) : []
    });
    const [cartCount, setCartCount] = useState(()=>{
        const counterFromStorage = window.localStorage.getItem('counterStorage')
        return counterFromStorage ? JSON.parse(counterFromStorage) : 0
    })
    const [subTotal, setSubTotal] = useState(()=> {
        const totalFromStorage = localStorage.getItem('totalStorage')
        return totalFromStorage ? JSON.parse(totalFromStorage) : 0
    })


    const saveCart = (prop) => {
        localStorage.setItem('cartStorage', JSON.stringify(prop))
    }

    const saveCounter = (prop) => {
        localStorage.setItem('counterStorage', JSON.stringify(prop))
    }

    const saveTotal = (prop) => {
        localStorage.setItem('totalStorage', JSON.stringify(prop))
    }

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
                saveCart(newCart)
                saveCounter(cartCount + quantity)
                saveTotal(subTotal + price)
                
                }else{
                    const newCart = structuredClone(cartList)
                    newCart.push({id: id, name: name, price: price, quantity: quantity, pictureUrl: pictureUrl, color: color, colorName: colorName})
                    // setCartList(prevState=>([...prevState, {id, name, price, quantity, pictureUrl, color, colorName}]))
                    setCartList(newCart)
                    setCartCount(cartCount + quantity)
                    setSubTotal(subTotal + price)
                    saveCart(newCart)
                    saveCounter(cartCount + quantity)
                    saveTotal(subTotal + price)
                }

        }
    
    const removeItem = ({id, quantity, price})=>{

            const cartListFiltered = cartList.filter(cartList => cartList.id !== id)
            setCartList(cartListFiltered)
            setCartCount(cartCount - quantity)
            setSubTotal(subTotal - price*quantity)
            saveCart(cartListFiltered)
            saveCounter(cartCount - quantity)
            saveTotal(subTotal - price*quantity)
    
        }
    
    const clearItems = ()=>{
            setCartList([])
            setCartCount(0)
            setSubTotal(0)
            localStorage.clear()
        }

    return (

        <cartContext.Provider value={{cartList, addItem, removeItem, clearItems, cartCount, subTotal}}>
            {children}
        </cartContext.Provider>
    )

    }








