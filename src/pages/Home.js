import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/search';
import { FormControl, Input, IconButton, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Home.scss';

const Home = () => {
    const search = useContext(SearchContext);
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const handleSearch = (event) => {
        event.preventDefault(); // don't want page to refresh on submit
        search.search(input).then((data) => {
            // search.setData(data.results);
            search.setData(data.data);
            localStorage.setItem('searchData', JSON.stringify(data.data));
            navigate('/results');
        })
    }

    return (
        <Grid container direction="column" justifyContent="center" alignContent="center" alignItems="center">
            <Grid item>
                <Grid item>
                    <img alt="killua" src={`${process.env.PUBLIC_URL}/killua-transparent.png`} height={400} />
                </Grid>
                <Grid item>
                    <form className="home-form">
                        <FormControl className="home-form-control" type="submit">
                            <Input
                                className="home-input"
                                placeholder="search for anime..."
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                            />
                            <IconButton
                                className="home-icon-button"
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={!input}
                                onClick={handleSearch}
                            >
                                <SearchIcon />
                            </IconButton>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;