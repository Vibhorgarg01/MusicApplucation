 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import Card from '@material-ui/core/Card';
 import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';

 const useStyles = makeStyles(theme => ({
  root: {
  	textAlign: 'center',
  	position: 'relative',
  	background: 'Grey',
  	padding: '0.5vh',
  },
  input: {
    fontSize: 'calc(8px + 1.5vh)',
    background:'#fff',
    borderRadius: 0,
    color:'#770'
  }
}));

 const Searchbox = ({ searchChange, searchSong }) => {
 	const classes = useStyles();
 	const onEnter = (event) => {
    if(event.key === "Enter"){
      searchSong()
    }
  }
 	return (
 		<Card className={classes.root} square >
	 		<TextField 
			 	backgroundc= "white"
	 			variant="outlined"
	 			placeholder="Search a song"
	 			onChange={searchChange}
	 			onKeyDown={onEnter}
	 		/>

	 		<Button 
	 				variant="contained" 
	 				onClick={searchSong} 
	 				color="primary"
	 				size="large"
	 				className={classes.button}
	 		>
	 			SEARCH!
	 		</Button>
 		</Card>
 	);
 }

export default Searchbox