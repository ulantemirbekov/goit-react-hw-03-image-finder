import { Component } from 'react';
import Api from './Api/Api';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import Loader from './Components/Loader/Loader';
import styles from './App.module.css';


class App extends Component {

  state = {
    photos: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    largeImageURL: '',
    showModal: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPhotos();
    }
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      photos: [],
      error: null
    });
  };

  fetchPhotos = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      searchQuery,
      currentPage
    };

    this.setState({ isLoading: true });

    Api.fetchPhotos(options)
      .then(photos => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });

      });
  };

  toggleModal = photo => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: photo
    }));
  };

  render() {

    const { photos, isLoading, error, largeImageURL, showModal } = this.state;

    return (
      <div className={styles.App}>
        {error && <h2>Something went wrong. Please try again later.</h2>}

        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && <Loader />}

        <ImageGallery photos={photos} onClick={this.toggleModal} />

        {photos.length > 0 && <Button onClick={this.fetchPhotos} />}

        {showModal && (<Modal largeImageURL={largeImageURL} closeModal={this.toggleModal} />)}

      </div>
    )
  }
}

export default App;