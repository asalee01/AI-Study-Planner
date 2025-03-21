"use client";
import { useState, useEffect } from "react";


export default function Home() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("api/generate");
        const data = await res.json();
        if (res.ok) {
          setQuote(data.result);
        } else {
          console.error("API ERROR: ", data.error);
        }
      } catch (error) {
        console.error("ERROR: ". error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Welcome to My Study Planner</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>
          <p>{quote}</p> {}
        </blockquote>
      )}


    </div>
  );
}