"use client";

import { useEffect, useState } from "react";

interface Juice {
  _id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  base64: string;
}

export function useJuices() {
  const [juices, setJuices] = useState<Juice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJuices() {
      try {
        const res = await fetch("/api/juice-cards");
        const data: Juice[] = await res.json();
        setJuices(data);
      } catch (err) {
        console.error("Failed to fetch juices:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchJuices();
  }, []);

  return { juices, loading };
}
