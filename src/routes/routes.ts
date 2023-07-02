import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { ProductsPage } from "../pages/Products";
import { UserRequestsPage } from "../pages/UserRequests";
import { UserDetailsPage } from "../pages/UserDetails";
import { RegisterPage } from "../pages/Register";
import { ProductPage } from "../pages/Product";
import { LoginPage } from "../pages/Login";
import { CartPage } from "../pages/Cart";
import { SellOldPage } from "../pages/SellOld";

export const router = createBrowserRouter([{
  path: '/',
  element: HomePage()
}, {
  path: 'products',
  element: ProductsPage()
}, {
  path: 'register',
  element: RegisterPage()
}, {
  path: 'login',
  element: LoginPage()
}, {
  path: 'product/:id',
  element: ProductPage()
},{
  path: 'cart',
  element: CartPage()
},{
  path: 'user/requests',
  element: UserRequestsPage()
},{
  path: 'user/details',
  element: UserDetailsPage()
},{
  path: 'user/sell-old',
  element: SellOldPage()
}])