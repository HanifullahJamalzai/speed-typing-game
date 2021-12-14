import { useEffect, useState, useRef } from "react";

function useWordGame(startingTime = 10) {
	const STARTING_TIME = 5;
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(startingTime);
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
		setTimeRemaining(startingTime);
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
	return [
		endGame,
		startGame,
		text,
		textBoxRef,
		isTimeRunning,
		timeRemaining,
		handleChange,
		wordCount,
	];
}

export default useWordGame;
