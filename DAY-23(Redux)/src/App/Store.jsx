import {configureStore} from '@reduxjs/toolkit'
import crudslice  from '../features/crudSlice'
export const store = configureStore({
   reducer : {
      app : crudslice
   }
})