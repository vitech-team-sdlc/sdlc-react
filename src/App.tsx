import React, { ReactElement } from 'react';
import './App.css';

import { routes } from './routes';

const App: React.FC = (): ReactElement => {
  return (
    <>{ routes }</>
  );
};

export default App;
