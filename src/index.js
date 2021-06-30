import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore ,combineReducers} from "redux";   // combine คือรวมหลายๆ Reducer ใน Store
import {Provider} from "react-redux";




const initialState={
  salary:9000,
  value:[]
}

const userReducer=(state={name:"Promatep", age:15},action)=>{      // เปลี่ยนแปลงค่า State
  switch (action.type) {
    case "setName":
      state={
        ...state,
        name : action.payload,
      }
      
      break;
      case "setAge":
        state={
          ...state,
          age : action.payload
        }
        break;
        
        default:
          break;
        }
        return state
}
      
      // เตรียม ค่า สำหรับ เปลี่ยนแปลง state
      const salaryReducer=(state=initialState,action)=>{      // เปลี่ยนแปลงค่า State
        switch (action.type) {
          case "Add":
            state={
              ...state,
              salary : state.salary+=action.payload,
              value: [...state.value,action.payload]
            }
            
            break;
            case "Sub":
              state={
                ...state,
                salary : state.salary-=action.payload,
                value: [...state.value,action.payload]
              }
              break;
              
              default:
                break;
              }
              return state
            }
            
            // สร้าง store แบบรับ Reducer เดียว
            //const store = createStore(salaryReducer)                // สร้าง Store
            
            // สร้า้ง Store แบบหลาย Reducer
            const store = createStore(combineReducers({sala:salaryReducer,user:userReducer}))
            // subscrib ดูค่า state ปัจจุบัน
            store.subscribe(()=>{                             // ดูค่า State
              console.log("Update Store :",store.getState());  
            })
            // เปลี่ยนแปลงค่า  state   โดยส่งค่าไปหา reducer
            store.dispatch({                                 // ส่งค่า State
              type:"Add",
              payload:500
            })
            store.dispatch({                                 // ส่งค่า State
              type:"setName",
              payload:"Nuntarut"
            })
            
            ReactDOM.render(
              <Provider store={store}>
                <App />
                </Provider>,
              document.getElementById('root')
            );
            
            
            