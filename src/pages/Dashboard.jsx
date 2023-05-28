import Header from "../components/Header";
import AddProduct from "../components/AddProduct";
import { useState } from "react";

function Dashboard() {
  const [productForm, setProductForm] = useState(false);

  return (
    <>
      <Header setIsOpen={setProductForm} />
      {productForm && <AddProduct setIsOpen={setProductForm} />}
    </>
  );
}

export default Dashboard;
