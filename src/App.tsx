import './assets/css/tailwind.css';
import './assets/css/main.css';
import './assets/css/custom.css';
import { Contact, Footer, Home, One, Sidebar, Two } from './components';
import { Route, Routes } from 'react-router';


function App() {

  return (
    <>
      <Sidebar />
      <div id="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

