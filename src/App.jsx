import { Suspense, lazy } from "react";
import HomeNavbar from "./components/HomeNavbar/HomeNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import HomeNavbar2 from "./components/HomeNavbar/HomeNavbar2";


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
    <HomeNavbar/>
      <HeroSection />
    </>
  )
}

export default App;
