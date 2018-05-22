export const changeUserType = (storePrefix, userType) => ({
  type: `set_${storePrefix}_user_type`,
  userType,
});

export const setSinglePersonView = (person) => ({
  type: 'set_single_person_view',
  person,
});