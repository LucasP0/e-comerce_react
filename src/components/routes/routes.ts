import { createBrowserRouter } from "react-router-dom";
import { PageEight } from "../../pages/pageEight";
import { PageSeven } from "../../pages/pageSeven";

export const router = createBrowserRouter([{
  path: '/',
  element: PageSeven()
}])