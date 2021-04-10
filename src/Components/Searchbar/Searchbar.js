import { Component } from 'react';
import styles from './Searchbar.module.css';


class Searchbar extends Component {

    state = {
        query: ''
    };

    handleChange = (event) => {
        this.setState({ query: event.currentTarget.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={styles.SearchForm_button}>
                        <span className={styles.SearchForm_button_label}>Search</span>
                    </button>

                    <input
                        className={styles.SearchForm_input}
                        value={this.state.query}
                        onChange={this.handleChange}
                        type="text"
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
};

export default Searchbar;
