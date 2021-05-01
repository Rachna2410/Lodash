import React from 'react';
import _ from 'lodash';

function String_case(){
	const _ = require("lodash");

let words = ["sky", "Sun", "Blue Island"];

console.log(_.map(words, _.camelCase));
console.log(_.map(words, _.capitalize));
console.log(_.map(words, _.kebabCase));
console.log(_.map(words, _.lowerCase));
console.log(_.map(words, _.upperCase));

	return(
		<div>
		</div>
		)
}
export default String_case;