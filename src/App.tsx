import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
	const [open, setOpen] = useState(false);

	return (
		<div className="App">
			<button
				type="button"
				className="modal__btn"
				onClick={() => setOpen(!open)}
			>
				Open modal
			</button>
			<Modal
				title="Example"
				content="This is an example."
				open={open}
				onClose={() => setOpen(!open)}
				buttons={[
					{
						label: 'Confirm',
						timer: 5,
					},
					{
						label: 'Cancel',
						variant: 'secondary',
					},
				]}
			/>
		</div>
	);
}

export default App;
