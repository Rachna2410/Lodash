import React from 'react';
import _ from "lodash";

function Currying(){
	const _ = require("lodash");

const multiply=(a, b, c)=> {

    return a * b * c;
}

let curried = _.curry(multiply);

let ret = curried(2)(3)(4);
console.log(ret);

	return(
		<div>
		</div>
		)
}
export default Currying;