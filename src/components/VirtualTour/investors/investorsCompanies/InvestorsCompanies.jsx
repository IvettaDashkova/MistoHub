import React, { useState, useEffect } from 'react';
import { fetchCompanies } from '../../../../services/API';

const InvestorsCompanies = () => {
  const [companiesData, setCompaniesData] = useState(null);
  function formImgURL(img) {
    const imgData = img.asset._ref.split('-');

    return `https://cdn.sanity.io/images/${
      import.meta.env.VITE_ADMIN_PROJECT_ID
    }/${import.meta.env.VITE_ADMIN_DATASET}/${imgData[1]}-${imgData[2]}.${
      imgData[3]
    }`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companiesResponse = await fetchCompanies();
        setCompaniesData(companiesResponse);
      } catch (error) {
        console.error('Error fetching companies data:', error);
      }
    };
    fetchData();
  }, []);

  if (!companiesData) return null;

  const imgUrl = companiesData[0].logoURL;

  return (
    <>
      {/* {companiesData.map((company) => (
        <img
          key={company.id}
          src={formImgURL(company.logoURL)}
          alt={company.name}
        />
      ))} */}
      {Array(11)
        .fill()
        .map((_, index) => (
          <img key={index} src={formImgURL(imgUrl)} alt={`Image ${index}`} />
        ))}
    </>
  );
};

export default InvestorsCompanies;
