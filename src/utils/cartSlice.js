import { createSlice } from "@reduxjs/toolkit" ;

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        addItem: (state , action) => {
            // console.log("added payload item", action.payload);

            /*In Vanilla(older) Redux we didn't mutate the state directly ;
             we have to mutate a copy of the current state and then modify the state through that and then return that copied utated state i.e;
             const newState = [...state];
             newState.items.push(action.payload);
             return newState; */

             //In React-redux(modern) we have to modify the current state and doesn"t need to return the state
           state.items.push(action.payload)
        },

        removeItem: (state,action) => {
           //  console.log("remove payload item sdkflsdk", state?.items);
            const id = action.payload;
           // console.log(action.payload, 'sdkflsdk')
            state.items = state.items.filter((item) => item?.card?.info?.id != id)
        },

        clearCart: (state) => {
            state.items.length = 0  //items[] = 0
        }
    }
});

export const {addItem , removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;