export const setUserLocation = (userLocation) => ({
  type: 'set_user_location',
  userLocation,
});

export const setLocationChoice = (storePrefix, locationChoice) => ({
  type: 'set_' + storePrefix + '_location_choice',
  locationChoice,
});