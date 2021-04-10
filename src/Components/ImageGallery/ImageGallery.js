import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';


const ImageGallery = ({ photos }) => {

    return (
        <ul className={styles.ImageGallery}>
            {photos.map(photo =>
                <ImageGalleryItem photo={photo} key={photo.id} />)}
        </ul>
    )
};

export default ImageGallery;