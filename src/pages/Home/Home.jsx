import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Category2 from '../../components/Category2/Category2';
import Services from '../../components/Services/Services';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Products from '../../components/Products/Products';
import Services2 from '../../components/Services/Service2';
import Blog from '../../components/Blog/Blog';
import productData from '../../data/products.json';
import blogData from '../../data/blogs.json';
import assets from '../../assets/assets';

const Home = ({ addToCart }) => {
  // Map JSON data to include actual image imports
  const mappedProductData = productData.map(product => ({
    ...product,
    image: assets.products[product.image] || product.image,
  }));

  const mappedBlogData = blogData.map(blog => ({
    ...blog,
    image: assets.blogs[blog.image] || blog.image,
  }));

  return (
    <div>
      <Hero />
      <Banner />
      <Category />
      <Category2 />
      <Services />

      <SectionHeader
        title="Our Products"
        subtitle="Explore Our Products"
      />

      <Products products={mappedProductData} addToCart={addToCart} />
      <Services2 />

      <SectionHeader
        title="Recent News"
        subtitle="Explore Our Blogs"
      />

      <Blog blogs={mappedBlogData} />
    </div>
  );
};

export default Home;
