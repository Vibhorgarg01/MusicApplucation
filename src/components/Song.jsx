import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles(theme => ({
  link: {
  	marginTop: 'Green',
  	'&:hover': {
  		color: 'Red',
  	}
  }
}));

const Song = ({artist, title, id}) => {
	const classes = useStyles();
 	return (
 		<ListItem>
 			<Link
 				target="_blank"
 				className={classes.link}  
 				href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${title}&a=${artist}`}>Song Name: {title} ...... Artist name: {artist}
 			</Link>
 		</ListItem>
 	);
}

export default Song;