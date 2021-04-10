import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo }) => {

    // largeImageURL

    const { webformatURL, tags } = photo;

    return (
        <li className={styles.ImageGalleryItem}>
            <img src={webformatURL} alt={tags} className={styles.ImageGalleryItem_image} />
        </li>
    )
};

export default ImageGalleryItem;