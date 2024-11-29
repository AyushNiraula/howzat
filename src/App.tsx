import './assets/css/tailwind.css';
import './assets/css/main.css';
import Sidebar from './components/Sidebar';
import Match from './components/Match';
import Footer from './components/Footer';
import Contact from './components/Contact';
import One from './components/One';
import Two from './components/Two';

function App() {

  return (
    <>
      <Sidebar />
      <div id="wrapper">
        <Match />
        <One />
        <Two />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App

