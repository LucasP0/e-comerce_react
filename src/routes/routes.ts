import { createBrowserRouter } from 'react-router-dom';


import { App } from "../App";
import { MainProductPage } from "../components/mainProductPage";
import { MainLoginPage } from "../components/mainLoginPage";
import { MainRegisterPage } from "../components/mainRegisterPage";
import { MainCart } from "../components/mainCart";
import { MainUserRequestsPage } from "../components/mainUserRequestsPage";
import { MainUserDetailsPage } from "../components/mainUserDetailsPage";
import { MainSellOldPage } from "../components/mainSellOldPage";
import { MainHomePage } from "../components/homePage/mainHomePage";
import { MainProductsPage } from "../components/mainProductsPage";
import { Mim } from '../components/homePage/min';


export const router = createBrowserRouter([{
  path: '/',
  element: App(),
  children: [
   {
    path: '/',
    element: MainHomePage()
    },
    , {
      path: '/products',
      element: MainProductsPage()
    },
    {
      path: '/login',
      element: MainLoginPage()
    },
    {
      path: '/register',
      element: MainRegisterPage()
    },
    {
      path: '/product/:id',
      element: MainProductPage()
    },
    {
      path: '/cart',
      element: MainCart()
    },
    {
      path: '/user/requests',
      element: MainUserRequestsPage()
    },
    {
      path: '/user/details',
      element: MainUserDetailsPage()
    },
    , {
      path: '/user/sell-old',
      element: MainSellOldPage()
    }
  ]
}])