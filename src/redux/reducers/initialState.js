const filters = {
  userType: 'student',
  userLocation: {},
  location: {
    label: '',
    placeId: '',
    lat: null,
    lng: null,
  },
  status: '',
  lastLoginAfter: '',
  maxDistance: '20',
  subjects: [],
};

const user = {
  userLocation: {},
  loggedIn: false,
  token: '',
};

const modals = {};

export default {
  filters,
  user,
  modals,
  personList: [],
  singlePersonView: null,
};