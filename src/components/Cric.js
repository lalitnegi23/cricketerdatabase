import {  useState } from "react";
import axios from 'axios';
import ListItem from "./ListItem";
import {Grid, Input, Typography } from '@material-ui/core';
import styles from './Cric.module.css';
import SearchIcon from '@material-ui/icons/Search';
const Cric=()=>{
const [player, setPlayer]=useState('');
const [res, setRes]=useState([]);

async function searchPlayerByName(){
    try {
        const response = await axios.get(`https://cricapi.com/api/playerFinder?apikey=vv3PJNB3QmhB0VuU1En7mBXo0183&name=${player}`)
        setRes(response.data.data);
    } catch (error) {
        console.log(`no such player exists`)
    }
}
    return(
        <div className={styles.layout}>
        <Typography
        variant='h4'
        align='center'
        >Cricket Player's Database</Typography>
        <Input
        type="text"
        value={player}
        onChange={(e)=>setPlayer(e.target.value)}
        placeholder="Search for Player..."
        fullWidth
        />
        <div className={styles.searchIcon}>
        <SearchIcon
        onClick={searchPlayerByName}
        className={styles.icon}
        fontSize="large"></SearchIcon>
        </div>
        
        {/* <input type="text" value={player} onChange={(e)=>setPlayer(e.target.value)}/> */}
        {/* <button onClick={searchPlayerByName}>Fire</button> */}
        <div className={styles.searched}>
            <Grid container spacing={3}>
        {res.map((item)=>
        <Grid key={item.pid} xs={12} sm={6} md={6}>
        <ListItem 
            item={item}
           />
           </Grid>
           )}
           
           </Grid>
           </div>
        </div>
    )
}

export default Cric;