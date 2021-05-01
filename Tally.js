import React from 'react';
import _ from 'lodash';
 function Tally(){
 	const _ = require("lodash");


let words = ['sky', 'forest', 'wood', 'sky', 'rock', 'cloud', 
    'sky', 'forest', 'rock', 'sky'];

let tally = _.reduce(words, (total, next) => {

  total[next] = (total[next] || 0) + 1 ;

  return total;
}, {});


console.log(tally);

 	return(
 		<div>
 		</div>
 		)
 }
 export default Tally;