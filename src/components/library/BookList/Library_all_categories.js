import React, { Component, Fragment } from 'react';
import styles from "../../../pages/LibraryPage/LibraryPage.module.css"
//Components

import LibraryList from './LibraryList';
import LibraryTitle from './LibraryTitle';
import AddBookForm from './AddBookForm';


export default class LibraryPage extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div>
                    <AddBookForm />
                    <LibraryTitle title={'Прочитано'} isReadBooks={true} />
                    <LibraryList
                        isReadBooks={true}
                        books={[
                            {
                                title: 'Some title',
                                author: 'some author',
                                year: 2345,
                                pages: 345,
                                rating: 5,
                                id: 2,
                            },
                        ]}
                    />
                </div>
                <div>
                    <LibraryTitle title={'Читаю'} isReadBooks={false} />
                    <LibraryList
                        books={[
                            {
                                title: 'Some title',
                                author: 'some author',
                                year: 2345,
                                pages: 345,
                                rating: 5,
                                id: 2,
                            },
                        ]}
                    />
                </div>
                <div>
                    <LibraryTitle title={'Маю намір прочитати'} isReadBooks={false} />
                    <LibraryList
                        books={[
                            {
                                title: 'Some title ',
                                author: 'some author',
                                year: 2345,
                                pages: 345,
                                rating: 5,
                                id: 2,
                            },
                        ]}
                    />
                </div>
            </div>
        )


    }
}
