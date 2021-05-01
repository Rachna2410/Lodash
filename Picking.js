import React from 'react';
import _ from 'lodash';

function Picking(){
	const _ = require("lodash");

console.log(_.pick({ name: 'John', age: 25 }, 'name'));
console.log(_.pick({ name: 'John', age: 25 }, 'age'));

	return(
		<div>
		</div>
		)
}
export default Picking;