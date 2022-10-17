import React from 'react'
import AnimeCard from './AnimeCard';
import { ImageList } from '@mui/material';

const AnimeList = (props) => {
    return (
        <ImageList variant="standard" cols={5} gap={1}>
            {props.data.map((anime) => {
                return <AnimeCard key={anime.mal_id} anime={anime} />
            })}
        </ImageList>
    );
};

export default AnimeList;
