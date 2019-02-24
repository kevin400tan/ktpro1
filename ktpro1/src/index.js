import React from 'react';
import ReactDOM from 'react-dom';


function MyFunc() {
  return (
		<div>
			<h1> Hello WOrld </h1>
      <ul>
        <li> I like apple </li>
        <li> I like pizza </li>
      </ul>
		</div>
  )
}

ReactDOM.render(<MyFunc />, document.getElementById('root'));

