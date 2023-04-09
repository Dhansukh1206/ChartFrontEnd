import { useEffect, useState } from "react";
import "./App.css";
import OHLCVChart from "./page/Header";
import Navbar from "./page/Navbar";

function App() {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    async function fetchFinancialData() {
      const response = await fetch("http://localhost:8080/api/transaction");
      const data = await response.json();
      console.log("data", data);
      setFinancialData(data.data);
    }

    fetchFinancialData();
  }, []);

  return (
    <div className="body">
      <Navbar />
      <h1 style={{ textAlign: "center" }}>OHLCV Chart</h1>
      <OHLCVChart data={financialData} />
    </div>
  );
}

export default App;
