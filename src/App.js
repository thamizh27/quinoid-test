import React, { useState, useEffect } from "react";
import Data from "./components/Data";
import Loader from "./components/Loader";
import Form from "./components/Form";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("Asia");

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.eu/rest/v2/region/${query}`)
      .then((res) => res.json())
      .then((data) => setData(data));

    setLoading(false);
  }, [query]);

  return (
    <div className="App">
      <Form submitedValue={(item) => setQuery(item)} />
      {loading ? <Loader /> : <Data data={data} />}
    </div>
  );
};

export default App;
