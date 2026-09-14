import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Photography from './routes/Photography'
import PasswordGate from './components/PasswordGate'
import DollyPocketProject from './routes/projects/DollyPocket'
import DesignSystemStarterProject from './routes/projects/DesignSystemStarter'
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
      { path: 'photography', element: <Photography /> },
      {
        path: 'projects/informativ',
        element: (
          <PasswordGate
            storageKey="informativ-unlocked"
            passwordHash="08575efb14f554e426d1bc53a519a10d1328b00e51ba7109071ad8a81060af07"
            load={() => import('./routes/projects/Informativ')}
          />
        ),
      },
      { path: 'projects/dolly-pocket', element: <DollyPocketProject /> },
      {
        path: 'projects/design-system-starter',
        element: <DesignSystemStarterProject />,
      },
      { path: 'resume', element: <Resume /> },
      { path: 'consulting', element: <Consulting /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
