import React from 'react';
import _ from "lodash";

function Range_fun(){
	const _ = require("lodash");

let vals = _.range(10);
console.log(vals);

let vals2 = _.range(0, 15);
console.log(vals2);

let vals3 = _.range(0, 15, 5);
console.log(vals3);

	return(
		<div>
		</div>
		)
}
export default Range_fun;