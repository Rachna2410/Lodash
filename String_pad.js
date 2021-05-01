import React from 'react';
import _ from 'lodash';
 function String_pad(){
 	const _ = require("lodash");

let nums = [657, 122, 3245, 345, 99, 18];

nums.forEach( e => {

    console.log(_.padStart(e.toString(), 20, '.'));
});

 	return(
 		<div>
 		</div>
 		)
 }
 export default String_pad; 