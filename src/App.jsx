import { Suspense, lazy } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// const GeneralApp = Loadable(lazy(() => import("../pages/dashboard/GeneralApp")),);

function App() {

  return (
    <div>
      Kodecorp E Commerce
    </div>
  )
}

export default App
