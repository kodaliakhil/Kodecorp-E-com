import { Suspense, lazy } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function LoadingScreen() {
  return <p>Loading...</p>
}

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const HeroSection = Loadable(lazy(() => import("./components/HeroSection")))

function App() {

  return (
    <>
      <HeroSection />
    </>
  )
}

export default App
