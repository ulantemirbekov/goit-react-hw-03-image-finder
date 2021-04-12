import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';


const ImageGallery = ({ photos, onClick }) => {

    return (
        <ul className={styles.ImageGallery}>
            {photos.map(photo =>
                <ImageGalleryItem photo={photo} key={photo.id} onClick={onClick} />
            )}
        </ul>
    )
};

ImageGallery.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default ImageGallery;