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

            // src={src}
            // alt={alt}
            // className={styles.ImageGalleryItem_image}
            // onClick={() => onClick(source)}
            />
        </li>
    )
};

export default ImageGalleryItem;