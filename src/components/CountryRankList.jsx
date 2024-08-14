import { RANK_LIST_TITLE } from '../constants/countryFormData';
import { CountryRankListItem } from './CountryRankListItem';

export const CountryRankList = ({ countryList, onDeleteClick }) => {
  const sortedCountryList = countryList.toSorted((a, b) => {
    return b.gold - a.gold;
  });
  if (Array.isArray(countryList) && countryList.length === 0)
    return <p className="no-countries-message">아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>;

  return (
    <table>
      <thead>
        <tr>
          {RANK_LIST_TITLE.map(item => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {sortedCountryList.map(item => {
          return (
            <CountryRankListItem
              key={item.country}
              item={item}
              onDeleteClick={() => onDeleteClick(item.country)}
            />
          );
        })}
      </tbody>
    </table>
  );
};
