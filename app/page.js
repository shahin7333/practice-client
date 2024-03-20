import Banner from "../components/client/home/Banner";
import axiosInstance from "../services/axiosInstance";
import Incentives from "../components/client/home/Incentives";
import ProductList from "../components/client/common/ProductList";

const Home = async () => {
  const products = await axiosInstance.get("/categories");
  const allCategory = products.data.payload.categories;
  return (
    <main className="">
      <Banner />
      {allCategory?.slice(0.3).map((category) => (
        <ProductList
          id={category._id}
          title={category?.category_name}
          des="Highlighting its main purpose and key features"
        />
      ))}
      {/* <ProductList
        data={allProducts}
        title={allProducts?.category_name}
        des="Highlighting its main purpose and key features"
      /> */}
      {/* <ProductList
        data={allProducts}
        title={allProducts?.category_name}
        des="Highlighting its main purpose and key features"
      />
      <ProductList
        data={allProducts}
        title={allProducts?.category_name}
        des="Highlighting its main purpose and key features"
      /> */}
      <Incentives />
    </main>
  );
};

export default Home;
