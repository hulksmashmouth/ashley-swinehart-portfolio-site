import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Photography from './routes/Photography'
import InformativProject from './routes/projects/Informativ'
import DollyPocketProject from './routes/projects/DollyPocket'
import DesignSystemStarterProject from './routes/projects/DesignSystemStarter'
import Resume from './routes/Resume'
import Consulting from './routes/Consulting'
import Pricing from './routes/Pricing'
import Questionnaire from './routes/Questionnaire'
import NotFound from './routes/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'photography', element: <Photography /> },
      { path: 'projects/informativ', element: <InformativProject /> },
      { path: 'projects/dolly-pocket', element: <DollyPocketProject /> },
      {
        path: 'projects/design-system-starter',
        element: <DesignSystemStarterProject />,
      },
      { path: 'resume', element: <Resume /> },
      { path: 'consulting', element: <Consulting /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'questionnaire', element: <Questionnaire /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
