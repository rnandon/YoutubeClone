import React from 'react';
import SearchResults from '../SearchResults/SearchResults';

export default SearchResultsPage = (props) => {
    return (
        <div>
            <SearchResults query={props.query} />
        </div>
    )
}