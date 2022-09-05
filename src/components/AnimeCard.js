import React from 'react'
import { SearchContext } from '../context/search';
import { Typography, Link, Paper, ImageListItem, ImageList, Grid } from '@material-ui/core';
import "./AnimeCard.scss";

const AnimeCard = (props) => {
    const title = props.anime.title.length > 16 ? `${props.anime.title.substring(0, 16)}...` : props.anime.title;
    const imageURL = props.anime.image_url;
    const synopsis = props.anime.synopsis.length > 25 ? `${props.anime.synopsis.substring(0, 25)}...` : props.anime.synopsis;
    return (
        <ImageListItem className="anime-card-container">
            <Grid container item xs={12}>
                <Paper className="anime-card">
                    <img src={imageURL} alt={title} style={{ maxHeight: 300 }} />
                    <Typography variant="h5" component="h2">{title}</Typography>
                    {/* in the above, we make use h2 font with h5 sizing */}
                    <Typography variatn="body2" component="h2" paragraph="true">{synopsis}</Typography>
                </Paper>
            </Grid>
        </ImageListItem>
    )
};

export default AnimeCard;
