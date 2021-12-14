import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(5);
	const [isTimeRunning, setIsTimeRunning] = useState(false);
	console.log(isTimeRunning);

	function handleChange(e) {
		const { value } = e.target;
		setText(value);
	}

	function calculateWordCount(text) {
		const wordsArr = text.trim().split(" ");
		return wordsArr.filter((word) => word !== "").length;
	}
	useEffect(() => {
		if (isTimeRunning && timeRemaining > 0) {
			setTimeout(() => {
				setTimeRemaining((time) => time - 1);
			}, 1000);
		} else if (!timeRemaining) {
			setIsTimeRunning(false);
		}
	}, [timeRemaining, isTimeRunning]);

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea name="text" onChange={handleChange} value={text} />
			<h4>Time remaining: {timeRemaining}</h4>
			<button
				onClick={() => {
					setIsTimeRunning((prevState) => !prevState);
				}}
			>
				Start
			</button>
			<h1>Word count: ???</h1>
		</div>
	);
}
export default App;
