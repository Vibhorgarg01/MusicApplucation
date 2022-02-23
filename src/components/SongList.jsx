 import React from 'react';

import Song from './Song';

 const SongList = ({ songs }) => {
 	return (
 		<div>
 			{
				songs.map((song) => {
			 		return (
						<div>
			 			<Song 
			 				key={song.id} 
			 				id={song.id} 
			 				title={song.title} 
			 				artist={song.artist.nameWithoutThePrefix}
			 			/> 
						</div>

			 		);
			 	})
			}
 		</div>
 	);
 }

export default SongList;