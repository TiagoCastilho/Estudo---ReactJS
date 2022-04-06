import { AlbumType } from '../types/AlbumType';

type Props = {
    data: AlbumType
}

export const AlbumItem = ({ data }: Props) => {
    return(
        <div>
              {data.title }
        </div>
    );
}