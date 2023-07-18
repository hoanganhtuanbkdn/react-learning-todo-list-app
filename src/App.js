import { useState } from 'react';
import './App.css';

function App() {
	const [list, setList] = useState([
		{
			status: 1,
			content: 'Create a new design',
		},
		{
			status: 0,
			content: 'Create a new design 2',
		},
	]);

	const [value, setValue] = useState('');

	const onAdd = () => {
		const newList = [
			{
				status: 0,
				content: value,
			},
			...list,
		];
		setList(newList);
		setValue('');
	};

	const onComplete = (index, oldStatus) => {
		const newList = [...list];

		newList[index] = {
			status: oldStatus === 0 ? 1 : 0,
			content: newList[index].content,
		};

		setList(newList);
	};
	return (
		<div className="container">
			<div className="card">
				<div className="card-header">
					<h1>To Do App</h1>

					<div className="card-input">
						<input
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<button onClick={onAdd} disabled={!value}>
							<p>+</p>
						</button>
					</div>
				</div>

				<div className="divide"></div>
				<div className="list">
					{list.map((item, index) => (
						<div
							className="item"
							key={index}
							onClick={() => onComplete(index, item.status)}
						>
							<button
								style={{
									backgroundColor:
										item.status === 1
											? 'rgba(54, 207, 0, 1)'
											: 'transparent',
								}}
							></button>
							<p>{item.content}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
