import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter} from 'react-router';

import CounterContextProvider from "./contexts/CounterContext.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
import {Provider} from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById('root')).render(


 <BrowserRouter> 

  <StrictMode>

<ThemeContextProvider> 
<CounterContextProvider> 

  <Provider store={store}> 
    <App />
</Provider>

 </CounterContextProvider>

 </ThemeContextProvider>
  </StrictMode>

</BrowserRouter>


)
