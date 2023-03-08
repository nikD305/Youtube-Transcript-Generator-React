import { configureStore} from "@reduxjs/toolkit";
import cartReduce from './slices/cartSlices'


export const store = configureStore(
   {
    reducer:{
car:cartReduce
    }
   }
)

