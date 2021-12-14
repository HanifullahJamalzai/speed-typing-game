import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

function App() {
	const STARTING_TIME = 5;
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
	const [isTimeRunning, setIsTimeRunning] = useState(false);
	const [wordCount, setWordCount] = useState(0);
	const textBoxRef = useRef(null); // a way to access the DOM

	function handleChange(e) {
		const { value } = e.target;
		setText(value);
	}

	function calculateWordCount(text) {
		const wordsArr = text.trim().split(" ");
		return wordsArr.filter((word) => word !== "").length;
	}

	function startGame() {
		setTimeRemaining(STARTING_TIME);
		setIsTimeRunning(true);
		setText("");
		textBoxRef.current.disabled = false;
		textBoxRef.current.focus();
	}
	function endGame() {
		setIsTimeRunning(false);
		setWordCount(calculateWordCount(text));
	}
	useEffect(() => {
		if (isTimeRunning && timeRemaining > 0) {
			setTimeout(() => {
				setTimeRemaining((time) => time - 1);
			}, 1000);
		} else if (timeRemaining === 0) {
			endGame();
		}
	}, [timeRemaining, isTimeRunning]);

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea
				ref={textBoxRef}
				name="text"
				onChange={handleChange}
				value={text}
				disabled={!isTimeRunning}
			/>
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={startGame} disabled={isTimeRunning}>
				Start
			</button>
			<h1>Word count: {wordCount}</h1>
		</div>
	);
}
export default App;
