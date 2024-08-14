import { useState } from 'react';
import './App.css';

const INITIAL_COUNTRY_FORM = { id: 0, country: '', gold: 0, silver: 0, bronze: 0 };

const COUNTRY_FORM_INPUTS = [
  {
    label: '국가',
    name: 'country',
    type: 'text',
  },
  {
    label: '금메달',
    name: 'gold',
    type: 'number',
  },
  {
    label: '은메달',
    name: 'silver',
    type: 'number',
  },
  {
    label: '동메달',
    name: 'bronze',
    type: 'number',
  },
];

const validateMedalCount = (count, medalType) => {
  if (isNaN(parseInt(count))) {
    return {
      isValid: false,
      message: `${medalType} 수는 숫자여야 합니다`,
    };
  }

  if (parseInt(count) < 0) {
    return {
      isValid: false,
      message: `${medalType} 수를 확인해주세요`,
    };
  }

  return { isValid: true };
};

const validateCountryForm = countryForm => {
  if (countryForm.country === '') {
    return {
      isValid: false,
      message: '국가를 입력해주세요',
    };
  }

  const goldValidation = validateMedalCount(countryForm.gold, '금메달');
  if (!goldValidation.isValid) return goldValidation;

  const silverValidation = validateMedalCount(countryForm.silver, '은메달');
  if (!silverValidation.isValid) return silverValidation;

  const bronzeValidation = validateMedalCount(countryForm.bronze, '동메달');
  if (!bronzeValidation.isValid) return bronzeValidation;

  return { isValid: true, message: '성공' };
};

const CountryRankListItem = ({ item, onDeleteClick }) => {
  return (
    <div>
      <div>{item.country}</div>
      <div>{item.gold}</div>
      <div>{item.silver}</div>
      <div>{item.bronze}</div>
      <button onClick={onDeleteClick}>삭제</button>
    </div>
  );
};

export const CountryRankList = ({ countryList, onDeleteClick }) => {
  const sortedCountryList = countryList.toSorted((a, b) => {
    return b.gold - a.gold;
  });
  return (
    <>
      {sortedCountryList.map(item => {
        return (
          <CountryRankListItem
            key={item.country}
            item={item}
            onDeleteClick={() => onDeleteClick(item.country)}
          />
        );
      })}
    </>
  );
};

const CountryFormItem = ({ inputItem, onChange, value }) => {
  return (
    <div>
      <label>{inputItem.label}</label>
      <input type={inputItem.type} name={inputItem.name} onChange={onChange} value={value} />
    </div>
  );
};

export const CountryForm = ({ countryForm, onChange, onAddClick, onUpdateClick }) => {
  return (
    <>
      {COUNTRY_FORM_INPUTS.map(inputItem => {
        return (
          <CountryFormItem
            key={inputItem.name}
            inputItem={inputItem}
            onChange={onChange}
            value={countryForm[inputItem.name]}
          />
        );
      })}
      <button onClick={onAddClick}>국가 추가</button>
      <button onClick={onUpdateClick}>업데이트</button>
    </>
  );
};

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

  const handleAddCountry = () => {
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

  const handleUpdateCountry = () => {
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

function App() {
  return (
    <>
      <h1>2024 파리 올림픽</h1>
      <CountrySection />
    </>
  );
}

export default App;
