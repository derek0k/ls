export const CountryRankListItem = ({ item, onDeleteClick }) => {
  return (
    <tr>
      <td>{item.country}</td>
      <td>{item.gold}</td>
      <td>{item.silver}</td>
      <td>{item.bronze}</td>
      <td>
        <button onClick={onDeleteClick}>삭제</button>
      </td>
    </tr>
  );
};
