import { createBrowserRouter } from "react-router-dom";
import { PageEight } from "../../pages/pageEight";

export const router = createBrowserRouter([{
  path: '/',
  element: PageEight()
}])