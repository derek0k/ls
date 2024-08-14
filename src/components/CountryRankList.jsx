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
