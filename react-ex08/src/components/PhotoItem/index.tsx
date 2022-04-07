import { Link } from 'react-router-dom';
import './styles.css';
import { PhotoType } from '../../types/PhotoType';

type Props = {
    data: PhotoType
}

export const PhotoItem = ({ data }: Props) => {
    return (
        <Link to={`/photo/${data.id}`} className="photo">
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    );
}