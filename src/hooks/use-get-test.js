import { useEffect, useState } from 'react';
import { getTest } from '../api';

export const useGetTest = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getTest().then(([res]) => res && setData(res));
	}, []);

	return data;
};
