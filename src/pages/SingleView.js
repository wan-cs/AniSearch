import React, { useEffect, useContext, useState } from 'react';
import { SearchContext } from '../context/search';
import { Typography } from '@material-ui/core';
import SingleAnime from '../components/SingleAnime.js'

const SingleView = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);

    useEffect(() => {
        if (search.singleData === undefined || Object.keys(search.singleData) === 0) {
            try {
                search.setSingle(JSON.parse(localStorage.getItem('singleData')));
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
        // console.log(search.singleData);
    }, [search])

    return (
        <div>
            {(dataExists && <SingleAnime info={search.singleData} />) ||
                <Typography variant="h4" component="h2">We couldn't find anything :(</Typography>}
        </div>
    );
};

export default SingleView;