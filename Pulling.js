import React from 'react';
import _ from 'lodash';

 function Pulling(){
 	const _ = require("lodash")

let nums = [1, 2, 3, 1, 2, 2, 4, 5, 7, 8];
 
_.pull(nums, 1, 2);
console.log(nums);

 	return(
 		<div>
 		</div>
 		)
 }
 export default Pulling;