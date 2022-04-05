import { Album } from '../types/Album';

type Props = {
    data: Album
}

export const AlbumItem = ({ data }: Props) => {
    return(
        <div>
              {data.title }
        </div>
    );
}