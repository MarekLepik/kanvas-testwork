import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AuthorComponent from "../components/AuthorComponent";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Products } from "../components/Products";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    s: "",
  });

  useEffect(() => {
    (async () => {
      const response = await fetch("/assets/products.json");
      const content = await response.json();
      setAllProducts(content);
      setFilteredProducts(content);
    })();
  }, []);

  //this useEffect filters shown artworks. It is called when filters value changes.
  useEffect(() => {
    let products = allProducts.filter((p) => {
      if (filters.s === "all") {
        return p;
      } else if (filters.s === "available") {
        return p.status.toLowerCase() === filters.s;
      }
    });
    setFilteredProducts(products);
  }, [filters]);

  //this handler changes filters value on triggering.
  const handleFilter = (s) => {
    console.log(s);
    setFilters({
      s,
    });
  };

  const listings = () => {
    const all = 0;
    const active = 0;
    allProducts.map((post) => {
      if (post.status === "available") {
        active += 1;
      }
      all += 1;
    });
    return { all, active };
  };

  return (
    <div>
      <Head>
        <title>Kanvas</title>
      </Head>
      <Header />
      <AuthorComponent />
      <div className="w-4/5 mx-auto">
        <div className="space-x-12 text-2xl text-kanvas-darker-grey">
          <button onClick={() => handleFilter("all")}>
            Collection {listings().all}
          </button>
          <button onClick={() => handleFilter("available")}>
            Active listings {listings().active}
          </button>
        </div>
        <hr className="bg-kanvas-darker-grey" />
      </div>

      <Layout>
        <Products products={filteredProducts} />
      </Layout>
    </div>
  );
}
