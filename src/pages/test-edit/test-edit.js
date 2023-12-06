import { Accordion, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useGetTest } from '../../hooks';
import { AnswerCard } from './components';

export const TestEdit = () => {
	const navigate = useNavigate();
	const data = useGetTest();

	if (!data) {
		return <h1 className="text-center">Loading...</h1>;
	}

	return (
		<div className="text-center">
			<h1>Редактирование теста</h1>
			<Accordion className="text-start">
				<Accordion.Item eventKey="0">
					{data.questions.map((question) => {
						return (
							<div key={question._id}>
								<Accordion.Header>
									Вопрос №1 {question.title}
								</Accordion.Header>
								<Accordion.Body>
									<div className="d-grid">
										<Button variant="outline-primary">+</Button>
									</div>
									<Form>
										{question.answers.map((answer) => {
											return (
												<AnswerCard
													key={answer._id}
													title={answer.title}
												/>
											);
										})}
									</Form>
								</Accordion.Body>
							</div>
						);
					})}
				</Accordion.Item>
			</Accordion>
			<div className="my-5">
				<Button
					variant="outline-primary"
					className="me-3"
					onClick={() => navigate('/')}
				>
					Назад
				</Button>
				<Button variant="success">Сохранить</Button>
			</div>
		</div>
	);
};
