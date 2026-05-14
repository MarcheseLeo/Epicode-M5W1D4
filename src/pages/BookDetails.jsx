import React from "react";
import { BaseLayout } from "../layouts/baseLayout/BaseLayout";
import { useParams } from "react-router-dom";

export const BookDetails = () => {
  const { asin } = useParams();
  return (
    <BaseLayout>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h2>Dettagli {asin}</h2>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
