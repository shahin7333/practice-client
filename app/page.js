import Banner from "../components/client/home/Banner";
import axiosInstance from "../services/axiosInstance";
import Incentives from "../components/client/home/Incentives";
import ProductList from "../components/client/common/ProductList";

const Home = async () => {
  const products = await axiosInstance.get("/products?page=1&limit=8");
  const allProducts = products.data.payload.products;
  return (
    <main className="">
      <Banner />
      <ProductList
        data={allProducts}
        title="Featured products"
        des="Highlighting its main purpose and key features"
      />
      <ProductList
        data={allProducts}
        title="Latest products"
        des="Highlighting its main purpose and key features"
      />
      <ProductList
        data={allProducts}
        title="Hot deals"
        des="Highlighting its main purpose and key features"
      />
      <Incentives />
    </main>
  );
};

export default Home;
