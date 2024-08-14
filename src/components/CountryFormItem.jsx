export const CountryFormItem = ({ inputItem, onChange, value }) => {
  // React Hook Form (?) - input에 대한 공부 먼저하기
  return (
    <div>
      <label>{inputItem.label}</label>
      <input type={inputItem.type} name={inputItem.name} onChange={onChange} value={value} />
    </div>
  );
};
