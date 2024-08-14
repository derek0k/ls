import { useState } from 'react';
import { CountryForm } from './CountryForm';
import { CountryRankList } from './CountryRankList';
import { INITIAL_COUNTRY_FORM } from '../constants/countryFormData';
import { validateCountryForm } from '../utils/validator';

export const CountrySection = () => {
  const [countryForm, setCountryForm] = useState(INITIAL_COUNTRY_FORM);
  const [countryList, setCountryList] = useState(() => {
    return JSON.parse(localStorage.getItem('countryList')) || [];
  });

  const resetCountryForm = () => {
    setCountryForm(INITIAL_COUNTRY_FORM);
  };

  const handleFormChange = e => {
    const { name, value } = e.target;
    const changedValue = ['gold', 'silver', 'bronze'].includes(name) ? Number(value) : value;

    setCountryForm(prev => ({ ...prev, [name]: changedValue }));
  };

  const handleAddCountry = e => {
    e.preventDefault();
    const isExist = countryList.some(item => item.country === countryForm.country);
    if (isExist) return alert('이미 존재하는 국가입니다');

    const { isValid, message } = validateCountryForm(countryForm);
    if (!isValid) return alert(message);

    setCountryList(prev => {
      const newList = [...prev, countryForm];
      localStorage.setItem('countryList', JSON.stringify(newList));
      return newList;
    });

    resetCountryForm();
  };

  const handleUpdateCountry = e => {
    e.preventDefault();
    const isExist = countryList.some(item => item.country === countryForm.country);
    if (!isExist) return alert('존재하지 않는 국가입니다');

    setCountryList(prev => {
      const newList = prev.map(item => {
        if (item.country === countryForm.country) return countryForm;
        return item;
      });
      localStorage.setItem('countryList', JSON.stringify(newList));
      return newList;
    });
  };

  const handleDeleteCountry = country => {
    setCountryList(prev => {
      const newList = prev.filter(item => item.country !== country);
      localStorage.setItem('countryList', JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <>
      <CountryForm
        countryForm={countryForm}
        onChange={handleFormChange}
        onAddClick={handleAddCountry}
        onUpdateClick={handleUpdateCountry}
      />
      <CountryRankList countryList={countryList} onDeleteClick={handleDeleteCountry} />
    </>
  );
};
