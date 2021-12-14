import React from "react";
import "./styles.css";
import useWordGame from "./hooks/useWordGame";

function App() {
	const [
		endGame,
		startGame,
		text,
		textBoxRef,
		isTimeRunning,
		timeRemaining,
		handleChange,
		wordCount,
	] = useWordGame();
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
			<button
				style={{ cursor: "pointer" }}
				onClick={startGame}
				disabled={isTimeRunning}
			>
				{wordCount ? "Play again" : "start"}
			</button>
			<h1>Word count: {wordCount}</h1>
		</div>
	);
}
export default App;
