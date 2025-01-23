"use client";
import FeaturedProductsPage from "./components/featured";
import HeroPage from "./components/hero";
import Categories from "./components/Categories";
import OurProduct from "./components/ourProducts";
import ExploreProduct from "./components/exploreProduct";

export default function Home() {
  return (
  <div>
    <HeroPage/>
    <FeaturedProductsPage/>
     <Categories/>
     <ExploreProduct/>
    <OurProduct/>
  </div>
  );
}