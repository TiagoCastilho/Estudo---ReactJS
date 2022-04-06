import { useRoutes } from 'react-router-dom';

import { AlbumList } from '../pages/AlbumList';
import { SelectedAlbum } from '../pages/SelectedAlbum';
import { Photo } from '../pages/Photo';
import { NotFound } from '../pages/NotFound';

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <AlbumList />},
        { path: '/album/:id', element: <SelectedAlbum />},
        { path: '/album/:id/photo/:id', element: <Photo />},
        { path: '*', element: <NotFound />},
        ]);
    }