export const changeUserType = (storePrefix, userType) => ({
  type: 'set' + storePrefix[0].toUpperCase() + storePrefix.substr(1) + 'UserType',
  userType,
});

export const setSinglePersonView = (person) => ({
  type: 'setSinglePersonView',
  person,
});