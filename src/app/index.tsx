import 'react-toastify/scss/main.scss';
import './styles/index.scss';

import { Routing } from 'pages';

import { WagmiInit, withProviders } from './providers';

const App = () => (
    <WagmiInit>
        <Routing />
    </WagmiInit>
);

export default withProviders(App);
