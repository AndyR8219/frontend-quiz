import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const AnswerCard = ({ title }) => {
	const [value, setValue] = useState(title);

	const handleChange = ({ target }) => {
		setValue(() => target.value);
	};

	return (
		<div className="d-flex align-items-center gap-3 mt-3">
			<Form.Control
				as="textarea"
				value={value}
				rows={3}
				onChange={(e) => handleChange(e)}
			/>
			<div className="d-flex flex-column align-items-center justify-content-center gap-2">
				<Form.Check type="radio" aria-label="radio 1" name="answer" />
				<Button variant="danger">X</Button>
			</div>
		</div>
	);
};
