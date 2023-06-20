import ReactDOM from 'react-dom/client'
import './styles/index.css';

import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/routes.ts';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
