import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout/Layout";
import StarPowersList from "./components/starPowersList/StarPowersList";
import GadgetsList from "./components/gadgetsList/GadgetsList";
import "./BrawlerInfo.css";

const BrawlerInfo = () => {
  const { id } = useParams(); // Отримати id з параметрів URL
  const [brawler, setBrawler] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrawler = async () => {
      try {
        const response = await axios.get(
          `https://api.brawlify.com/v1/brawlers/${id}`
        );
        setBrawler(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrawler();
  }, [id]);

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <div className="brawler-detail-page">
        {brawler ? (
          <div>
            <img src={brawler.imageUrl} alt="Not found" />
            <h1>{brawler.name}</h1>
            <h2>Star Powers:</h2>
            <StarPowersList starPowers={brawler.starPowers} />
            <h2>Gadgets:</h2>
            <GadgetsList gadgets={brawler.gadgets} />
          </div>
        ) : (
          <p>Brawler not found</p>
        )}
      </div>
    </Layout>
  );
};

export default BrawlerInfo;
