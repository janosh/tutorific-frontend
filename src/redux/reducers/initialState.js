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

const login = {
  showLoginModal: false,
  email: '',
  password: '',
  userType: 'student',
};

const user = {
  userLocation: {},
  loggedIn: false,
  token: '',
};

export default {
  filters,
  login,
  user,
  personList: [],
  singlePersonView: null,
};