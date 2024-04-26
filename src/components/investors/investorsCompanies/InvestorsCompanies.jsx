import React, { useState, useEffect } from 'react';
import { fetchCompanies } from '../../../services/API';
import ModalCompanies from '../modalCompanies/ModalCompanies';
import { CompanyWrapper } from './InvestorsCompanies.styled';

const InvestorsCompanies = () => {
  const [companiesData, setCompaniesData] = useState(null);
  const [selectedCompanies, setSelectedCompanies] = useState(null);

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

  const openModal = (company) => {
    setSelectedCompanies(company);
  };

  const closeModal = () => {
    setSelectedCompanies(null);
  };

  if (!companiesData) return null;

  const duplicateCompanies = Array.from(
    { length: 11 },
    (_, index) => companiesData[index % companiesData.length]
  );

  console.log(selectedCompanies);
  return (
    <CompanyWrapper>
      <div>
        <ul>
          {duplicateCompanies.map((company, index) => (
            <li key={index}>
              <img
                src={formImgURL(company.logoURL)}
                alt={`Company ${index}`}
                onClick={() => openModal(company)}
              />
            </li>
          ))}
          {selectedCompanies && (
            <ModalCompanies
              isOpen={selectedCompanies !== null}
              data={selectedCompanies}
              onClose={closeModal}
            />
          )}
        </ul>
      </div>
    </CompanyWrapper>
  );
};

export default InvestorsCompanies;
