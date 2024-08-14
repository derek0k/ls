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

export const validateCountryForm = countryForm => {
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
