import React, { useState } from 'react';
import './App.scss';

function App() {
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
								setPlayer1Counter(player1Counter + 1);
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
								setPlayer2Counter(player2Counter + 1);
							}}
						>
							+
						</button>
					</div>
				</div>
				<button
					onClick={() => {
						setPlayer1Counter(player1Counter - 1);
						setPlayer2Counter(player2Counter - 1);
					}}
					className='buttonAll'
				>
					-
				</button>
			</div>
		</div>
	);
}

export default App;
