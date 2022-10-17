import React, { useEffect, useContext, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { SearchContext } from '../context/search';
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';


const Results = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);
    const [triedStorage, setTriedStorage] = useState(false);


    useEffect(() => {
        if (!triedStorage && (search.animeData === undefined || search.animeData.length === 0)) {
            try {
                console.log("trying to set results from local storage");
                setTriedStorage(true);
                search.setData(JSON.parse(localStorage.getItem('searchData')));
                setDataExists(true);
            }
            catch (error) {
                console.log("something went wrong :(");
                console.log(error);
                setDataExists(false); // no data from search and none in local storage
            }
        }
        if (search.animeData === undefined || search.animeData.length === 0) {
            setDataExists(false);
        }
    }, [search, triedStorage]);

    return (
        <Box mt={2}>
            {
                (dataExists && <AnimeList data={search.animeData} />) ||
                <Grid container direction="column" justifyContent="center" alignContent="center" alignItems="center">
                    <Grid item>
                        <img alt="killua" src={`${process.env.PUBLIC_URL}/killua-huh.gif`} height={400} />
                    </Grid>
                    <Grid item>
                        <Typography align='center' variant="h4" color="common.white">Sorry, we couldn't find anything :(</Typography>
                    </Grid>
                </Grid>
            }
        </Box >
    );
};

export default Results;