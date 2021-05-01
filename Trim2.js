import React from 'react';
import _ from "lodash";

function Trim2(){
	const _ = require("lodash")

let words = ['_falcon', '-owl-', '_-sky-_'];
let trimmed = _.map(words, (word) => { return _.trim(word, '-_')});

console.log(trimmed);

	return(
		<div>
		</div>
		)
}
export default Trim2;