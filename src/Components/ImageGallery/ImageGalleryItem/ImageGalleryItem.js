import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo, onClick }) => {

    const { webformatURL, tags, largeImageURL } = photo;

    return (
        <li className={styles.ImageGalleryItem}>
            <img
                className={styles.ImageGalleryItem_image}
                src={webformatURL}
                alt={tags}
                onClick={() => onClick(largeImageURL)}
            />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
    onClick: PropTypes.func,
};

export default ImageGalleryItem;