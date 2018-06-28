import React from 'react';
import Container from './Container';


const Search = ({match}) => (
    <Container tags={match.params.tags}/>
);

export default Search;
