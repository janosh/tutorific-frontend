export const setUserLocation = (userLocation) => ({
  type: 'set_user_location',
  userLocation,
});

export const setLocation = (storePrefix, location) => ({
  type: 'set_' + storePrefix + '_location',
  location,
});