import Header from "./components/NotificationButton/Header";
import SalesCard from "./components/NotificationButton/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (

    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>


      </main>


    </>

  )
}

export default App;
