import { useState } from 'react';
import ModalCompanies from '../ModalCompanies/ModalCompanies';
import { CompanyWrapper } from './InvestorsCompanies.styled';
import { nanoid } from 'nanoid';
import defaultImage from 'src/assets/investors/default-img.png';

const InvestorsCompanies = ({companies: companiesData}) => {
  const [selectedCompanies, setSelectedCompanies] = useState(null);

  const openModal = (company) => {
    setSelectedCompanies(company);
  };

  const closeModal = () => {
    setSelectedCompanies(null);
  };

  if (!companiesData) return;

  return (
    <CompanyWrapper>
      {Array.isArray(companiesData) && (
        <div>
          <ul>
            {companiesData.map((company) => (
              <li key={nanoid()}>
                <img
                  src={company.logoURL
                      || defaultImage}
                  alt={`Company ${company.id}`}
                  onClick={() => openModal(company)}
                  loading="lazy"
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
      )}
    </CompanyWrapper>
  );
};

export default InvestorsCompanies;
