import { Card, Spin, Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Category } from "../../../Types/Types";

import { useGetCategoriesQuery } from "../../../redux/api";

const CategoryList: React.FC = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  const navigate = useNavigate();

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
          marginBottom: "20px",
          fontSize: "38px",
          fontWeight: "bold",
          color: "#1F2937",
        }}
      >
        All Categories
      </h1>
      <ul className="grid lg:gird lg:grid-cols-4 md:grid-cols-2 gap-3 my-4">
        {categories?.map((category: Category) => (
          <div className="" key={category.slug}>
            <Card
              title={
                <div className="flex items-center">
                  <span>{category?.name}</span>
                </div>
              }
              style={{ width: "100%" }}
            >
              <p className="mb-4">
                <strong>Slug:</strong> {category?.slug}
              </p>
              <Button
                type="primary"
                onClick={() => navigate(`/category/${category.slug}`)}
              >
                See {category?.name} Item
              </Button>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
