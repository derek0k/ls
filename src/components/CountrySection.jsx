import { CountryForm } from './CountryForm';
import { CountryRankList } from './CountryRankList';
import useCountryList from '../hooks/useCountryList';

export const CountrySection = () => {
  const {
    countryForm,
    countryList,
    handleFormChange,
    handleAddCountry,
    handleUpdateCountry,
    handleDeleteCountry,
  } = useCountryList();
  return (
    <>
      <CountryForm
        countryForm={countryForm}
        // Form 자체에서만 쓰는 로직들은 해당 파일로 내려주기?
        onChange={handleFormChange}
        onAddClick={handleAddCountry}
        onUpdateClick={handleUpdateCountry}
      />
      <CountryRankList countryList={countryList} onDeleteClick={handleDeleteCountry} />
    </>
  );
};
