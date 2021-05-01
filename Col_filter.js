import React from 'react';
import _ from 'lodash';

function Col_filter(){
	const _ = require("lodash");

let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let pos_nums = _.filter(nums, (e) => e > 0);
console.log(pos_nums);

	return(
		<div>
		</div>
		)
}
export default Col_filter;