import App from 'app';
import { createRoot } from 'react-dom/client';
import { appStarted } from 'shared/config/init';

import 'shared/config/i18n';

const container = document.getElementById('root');
const root = createRoot(container!);

window.process = {
  ...window.process
};

appStarted();

root.render(
  <App />
);

