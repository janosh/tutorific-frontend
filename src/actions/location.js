export const setUserLocation = (userLocation) => ({
  type: 'setUserLocation',
  userLocation,
});

export const setLocationChoice = (storePrefix, locationChoice) => ({
  type: 'set' + storePrefix[0].toUpperCase() + storePrefix.substr(1) + 'LocationChoice',
  locationChoice,
});