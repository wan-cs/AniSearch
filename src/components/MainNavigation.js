import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import { fade, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../context/search';
import { useState } from 'react';

const Search = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {

    const navigate = useNavigate();
    const search = useContext(SearchContext);
    const [input, setInput] = useState('');
    const handleSearch = (event) => {
        event.preventDefault();
        search.search(input).then((data) => {
            search.setData(data.data);
            localStorage.setItem('searchData', JSON.stringify(data.data));
            setInput('');
            navigate('/results');
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton color="inherit" sx={{ mr: 2 }} onClick={() => {
                        navigate("/")
                    }}>
                        <img alt="cat-logo" src={`${process.env.PUBLIC_URL}/cat-logo.png`} height={50} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            AniSearch
                        </Typography>
                    </IconButton>
                    <Search onSubmit={handleSearch}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
