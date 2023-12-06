export const getTest = async () =>
	fetch('/api/')
		.then((res) => {
			if (res.ok) {
				return res;
			}
			const error =
				res.status === 404
					? 'Такая страница не существует'
					: 'Что-то пошло не так.';
			return Promise.reject(error);
		})
		.then((res) => res.json());
