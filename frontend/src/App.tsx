import Header from "./components/NotificationButton/Header";
import SalesCard from "./components/NotificationButton/SalesCard";


import { Toaster } from "react-hot-toast";


function App() {


  return (

    <>


      <Toaster position="top-right"
        reverseOrder={false} />

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
