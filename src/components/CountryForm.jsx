import { COUNTRY_FORM_INPUTS } from '../constants/countryFormData';

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
    <form>
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
      <div className="buttonBox">
        <button onClick={onAddClick}>국가 추가</button>
        <button onClick={onUpdateClick}>업데이트</button>
      </div>
    </form>
  );
};
