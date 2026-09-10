import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import InformativProject from './routes/projects/Informativ'
import DollyPocketProject from './routes/projects/DollyPocket'
import Resume from './routes/Resume'
import Consulting from './routes/Consulting'
import NotFound from './routes/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/informativ', element: <InformativProject /> },
      { path: 'projects/dolly-pocket', element: <DollyPocketProject /> },
      { path: 'resume', element: <Resume /> },
      { path: 'consulting', element: <Consulting /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
