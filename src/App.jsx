import { useState } from "react";
import Loading from "./components/Loading";
import "./style.css";
import { useEffect } from "react";
import Tour from "./components/Tour";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  async function fetchTours() {
    setLoading(true);
    try {
      // await new Promise((resolve) => setTimeout(resolve, 5000)); // delay 5 seconds
      const responce = await fetch(url);
      const tours = await responce.json();
      setTours(tours);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    //to run only once
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <>
      <div className="loading">
        <h2>none left</h2>
        <button className="btn" onClick={fetchTours}>Refresh list</button>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="title">our tours</h1>

      {tours.map((e) => {
        return <Tour key={e.id} removeTour={removeTour} {...e} />;
      })}
    </>
  );
}

export default App;
