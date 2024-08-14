export const INITIAL_COUNTRY_FORM = { id: 0, country: '', gold: 0, silver: 0, bronze: 0 };

export const COUNTRY_FORM_INPUTS = Object.freeze([
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
]);

export const RANK_LIST_TITLE = Object.freeze([국가명, 금메달, 은메달, 동메달, 액션]);
