import React from 'react';
import _ from "lodash";

function Sample_fun(){
	const _ = require("lodash")

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let word = _.sample(words);
console.log(word);

	return(
		<div>
		</div>
		)
}
export default Sample_fun;