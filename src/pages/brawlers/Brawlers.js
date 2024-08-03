import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout/Layout";
import "./Brawlers.css";

const Brawlers = () => {
  const [brawlers, setBrawlers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrawlers = async () => {
      try {
        const response = await axios.get(
          "https://api.brawlify.com/v1/brawlers"
        );
        setBrawlers(response.data.list.reverse());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrawlers();
  }, []);

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <div className="brawlers-page">
        <h1>Brawlers List</h1>
        <ul className="brawlers-list">
          {brawlers.map((brawler) => (
            <li key={brawler.id}>
              <Link to={`/brawlers/${brawler.id}`}>
                <img src={brawler.imageUrl} alt="Not found" />
                <p>{brawler.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Brawlers;
