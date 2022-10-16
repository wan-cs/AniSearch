import React, { useContext } from 'react'
import { SearchContext } from '../context/search';
import { useNavigate } from 'react-router-dom';
import { Typography, Link, Paper, ImageListItem, Grid } from '@material-ui/core';
import "./AnimeCard.scss";

const AnimeCard = (props) => {
    const navigate = useNavigate();
    const search = useContext(SearchContext);
    const onClickHandler = () => {
        fetch(`https://api.jikan.moe/v4/anime/${props.anime.mal_id}`).then((response) => response.json()).then((data) => {
            console.log(data.data);
            search.setSingle(data.data);
            localStorage.setItem('singleData', JSON.stringify(data.data));
            navigate('/single-view');
        });
    };

    const title = props.anime.title && props.anime.title.length > 16 ? `${props.anime.title.substring(0, 16)}...` : props.anime.title;
    const imageURL = props.anime.images.jpg.image_url;
    const synopsis = props.anime.synopsis && props.anime.synopsis.length > 25 ? `${props.anime.synopsis.substring(0, 25)}...` : props.anime.synopsis;
    return (
        <ImageListItem className="anime-card-container">
            <Grid container item xs={12}>
                <Paper className="anime-card">
                    <img src={imageURL} alt={title} style={{ maxHeight: 300 }} />
                    <Typography variant="h5" component="h2">{title}</Typography>
                    {/* in the above, we make use h2 font with h5 sizing */}
                    <Typography variant="body2" component="h2" paragraph>{synopsis}</Typography>
                    <Link component="button" variant="body1" style={{ marginBottom: 0 }} onClick={onClickHandler}>
                        More Info
                    </Link>
                </Paper>
            </Grid>
        </ImageListItem>
    )
};

export default AnimeCard;
