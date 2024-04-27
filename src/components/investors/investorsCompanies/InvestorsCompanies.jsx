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
    console.log('useEffect');
    const fetchData = async () => {
      try {
        const companiesResponse = await fetchCompanies();
        setCompaniesData(companiesResponse);
        console.log(companiesResponse);
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

  if (!companiesData) return;

  let randomId = () => Math.floor(Math.random() * 10000);
  return (
    <CompanyWrapper>
      <div>
        <ul>
          {companiesData.map((company, index) => (
            <li key={randomId()}>
              <img
                src={formImgURL(company.logoURL)}
                alt={`Company ${company.id}`}
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
