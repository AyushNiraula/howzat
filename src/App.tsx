import './assets/css/tailwind.css';
import './assets/css/main.css';
import { Contact, Footer, Home, One, Sidebar, Two } from './components';


function App() {

  return (
    <>
      <Sidebar />
      <div id="wrapper">
        <Home />
        <One />
        <Two />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App

