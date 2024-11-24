import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import { Index,loader as indexLoader } from './routes/Index';
import { Photo, loader as photoLoader } from './routes/Photo';
import { Root } from './routes/Root';
import { Vote, action as voteAction } from './routes/Vote';
import { Voted } from './routes/Voted';
import { ErrorPage } from './error-page';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<ErrorPage />} >
    <Route errorElement={<ErrorPage/>}>
    <Route index element={<Index />} loader={indexLoader} />
    <Route path="photos/:imageId" element={<Photo />} loader={photoLoader}>
      <Route index element={<Vote />} action={voteAction}/>
      <Route path="voted" element={<Voted />} />
    </Route>
    </Route>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


