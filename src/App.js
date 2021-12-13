import React, { useState } from "react";
import "./styles.css";

function App() {
	const [text, setText] = useState("");
	console.log(text);

	function handleChange(e) {
		const { value } = e.target;
		setText(value);
	}

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea name="text" onChange={handleChange} value={text} />
			<h4>Time remaining: ???</h4>
			<button>Start</button>
			<h1>Word count: ???</h1>
		</div>
	);
}
export default App;
