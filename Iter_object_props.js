import React from 'react';
import _ from "lodash";

function Iter_object_props(){
	const _ = require("lodash");

let p = {age: 24, name: "Rebecca", occupation: "teacher"};

_.forIn(p, (value, key) => {

    console.log(`${key}: ${value}`);
})

	return(
		<div>
		</div>
		)
}
export default Iter_object_props;