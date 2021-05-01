import React from 'react';
import _ from "lodash";

function First_last(){
	const _ = require("lodash")

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);

return (
	<div>
	</div>
	)
}
export default First_last;