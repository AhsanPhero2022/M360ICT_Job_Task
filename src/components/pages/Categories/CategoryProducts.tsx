import { Card, Spin } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

import { Product } from "../../../Types/Types";

import { useGetProductsByCategoryQuery } from "../../../redux/api";

const CategoryProducts: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, isLoading } = useGetProductsByCategoryQuery(slug);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "38px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        {slug} category
      </h1>
      <ul className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.products.map((product: Product) => (
          <li key={product.id}>
            <Card title={product.title} className="w-full h-[550px]">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-auto mb-4"
              />
              <p className="text-justify mb-4">
                <span className="font-semibold text-xl">Description:</span>{" "}
                {product.description}
              </p>
              <p className="mb-2">
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                <strong>Rating:</strong> {product.rating}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
