export const initialState ={
    basket: [

    ],
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0)

const  reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET' :
            //Logic for adding item to busket
          return { 
              ...state,
              basket: [...state.basket, action.item],
          }    
        break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0){
                //item exists in the basket, remove it ...

               newBasket.splice(index,1);

            }
            else {
                console.warn (
                    `Can't remove product (id: ${action.id}) as its not in the basket`
                )
            }
          return {
            
              ...state,
               basket: newBasket,
            }  
        break;
        
        default :
        return state;
    }
}

export default reducer;
/*
*/