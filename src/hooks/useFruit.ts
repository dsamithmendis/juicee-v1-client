"use client";

import { useEffect, useState } from "react";

interface Fruit {
  _id: string;
  name: string;
  title: string;
  base64: string;
}

export function useFruits() {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFruits() {
      try {
        const res = await fetch("/api/fruit-cards");
        const data: Fruit[] = await res.json();
        setFruits(data);
      } catch (err) {
        console.error("Failed to fetch fruits:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFruits();
  }, []);

  return { fruits, loading };
}
