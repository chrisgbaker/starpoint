import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const history = useRouterHistory(createHistory)({ basename: "starpoint" });

export default history;
