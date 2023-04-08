import React, { useState } from 'react';
import './App.scss';

function App_() {
	const [player1Counter, setPlayer1Counter] = useState(10);
	const [player2Counter, setPlayer2Counter] = useState(10);

	return (
		<div className='App'>
			<div className='container'>
				<div className='flexbox'>
					<div>
						<div>Player 1</div>
						<div>Score: {player1Counter}</div>
						<button
							onClick={() => {
								setPlayer1Counter(actual => actual + 1);
							}}
						>
							+
						</button>
					</div>
					<div>
						<div>Player 2</div>
						<div>Score: {player2Counter}</div>
						<button
							onClick={() => {
								setPlayer1Counter(actual => actual + 1);
							}}
						>
							+
						</button>
					</div>
				</div>
				<button
					onClick={() => {
						setPlayer1Counter(actual => actual - 1);
						setPlayer2Counter(actual => actual - 1);
					}}
				>
					-
				</button>
				<br />
				<button
					onClick={() => {
						setPlayer1Counter(10);
						setPlayer2Counter(10);
					}}
					className='buttonReset'
				>
					Reset
				</button>
			</div>
		</div>
	);
}
function App() {
	const [counters, setCounters] = useState({
		c1: 10,
		c2: 10,
	});

	return (
		<div className='App'>
			<div className='container'>
				<div className='flexbox'>
					<div>
						<div>Player 1</div>
						<div>Score: {counters.c1}</div>
						<button
							onClick={() => {
								setCounters(actual => {
									return { ...actual, c1: actual.c1 + 1 };
								});
							}}
						>
							+
						</button>
					</div>
					<div>
						<div>Player 2</div>
						<div>Score: {counters.c2}</div>
						<button
							onClick={() => {
								setCounters(actual => {
									return { ...actual, c2: actual.c2 + 1 };
								});
							}}
						>
							+
						</button>
					</div>
				</div>
				<button
					onClick={() => {
						setCounters(actual => {
							return {
								...actual,
								c1: actual.c1 - 1,
								c2: actual.c2 - 1,
							};
						});
					}}
				>
					-
				</button>
				<br />
				<button
					onClick={() => {
						setCounters(actual => {
							return {
								...actual,
								c1: 10,
								c2: 10,
							};
						});
					}}
					className='buttonReset'
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
