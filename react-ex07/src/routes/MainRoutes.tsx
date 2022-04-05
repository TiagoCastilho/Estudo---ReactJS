/* Alternativa 1
import { Routes, Route } from 'react-router-dom';
*/

// Alternativa 2
import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { NotFound } from '../pages/NotFound';
import { RequireAuth } from '../RequireAuth';

export const MainRoutes = () => {
  // Alternativa 2
  return useRoutes([
    { path: '/', element: <Home />},
    { path: '/sobre', element: <RequireAuth><About /></  RequireAuth>},
    { path: '/sobre/:slug', element: <AboutItem />},
    { path: '*', element: <NotFound />},
  ]);

  /* Alternativa 1
    return(
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About /></RequireAuth>} />
          <Route path="/sobre/:slug" element={<AboutItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    );
  */
}