import { useState } from 'react';
import ModalCompanies from '../ModalCompanies/ModalCompanies';
import { CompaniesList, CompanyWrapper } from './InvestorsCompanies.styled';
import { nanoid } from 'nanoid';
import defaultImage from 'src/assets/investors/default-img.png';
import { makerAnimParams } from '../../../helpers/makerAnimParams';
import { useMediaQuery } from 'react-responsive';

const InvestorsCompanies = ({ companies: companiesData }) => {
  const [selectedCompanies, setSelectedCompanies] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768 });

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
        <CompaniesList
          $anim={makerAnimParams(companiesData.length, isDesktop, isTablet)}
        >
          {Array.from([...companiesData, ...companiesData]).map((company) => (
            <li key={nanoid()}>
              <img
                src={company.logoURL || defaultImage}
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
        </CompaniesList>
      )}
    </CompanyWrapper>
  );
};

export default InvestorsCompanies;
