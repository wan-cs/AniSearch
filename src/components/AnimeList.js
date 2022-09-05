import React from 'react'
import AnimeCard from './AnimeCard';
import { ImageList } from '@material-ui/core';

const AnimeList = (props) => {
    return (
        <ImageList className="card-list">
            {props.data.map((anime) => {
                return <AnimeCard key={anime.mal_id} anime={anime} />
            })}
        </ImageList>
    );
};

export default AnimeList;
