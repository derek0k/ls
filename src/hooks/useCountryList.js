import { useState } from 'react';
import { INITIAL_COUNTRY_FORM } from '../constants/countryFormData';
import { validateCountryForm } from '../utils/validator';

const useCountryList = () => {
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

  const isExistCountry = country => {
    return countryList.some(item => item.country === country);
  };

  const handleAddCountry = e => {
    e.preventDefault();
    if (isExistCountry(countryForm.country)) return alert('이미 존재하는 국가입니다');

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
    if (!isExistCountry(countryForm.country)) return alert('존재하지 않는 국가입니다');

    setCountryList(prev => {
      const newList = prev.map(item => {
        if (item.country === countryForm.country) return countryForm;
        return item;
      });
      localStorage.setItem('countryList', JSON.stringify(newList));
      return newList;
    });

    resetCountryForm();
  };

  const handleDeleteCountry = country => {
    setCountryList(prev => {
      const newList = prev.filter(item => item.country !== country);
      // useEffect?
      localStorage.setItem('countryList', JSON.stringify(newList));
      return newList;
    });
  };

  return {
    countryForm,
    countryList,
    handleFormChange,
    handleAddCountry,
    handleUpdateCountry,
    handleDeleteCountry,
  };
};

export default useCountryList;
