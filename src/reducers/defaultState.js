const prefilledSignup = true;

export default {
  filters: {
    userType: 'student',
    userLocation: {},
    location: {
      label: '',
      placeId: '',
      lat: undefined,
      lng: undefined,
    },
    status: '',
    lastLoginAfter: '',
    maxDistance: '20',
  },
  login: {
    showLoginModal: false,
    email: '',
    password: '',
    userType: 'student',
  },
  user: {
    userLocation: {},
    loggedIn: false,
    token: '',
  },
  signup: {
    // account info
    firstName: prefilledSignup ? 'John' : '',
    lastName: prefilledSignup ? 'Doe' : '',
    password: prefilledSignup ? 'yxcvbnm' : '',
    confirmPassword: prefilledSignup ? 'yxcvbnm' : '',
    email: prefilledSignup ? 'john@doe.com' : '',
    userType: 'tutor',
    // contact info
    phone: prefilledSignup ? '+49 151 1234 5678' : '',
    location: {
      label: prefilledSignup ? 'Heidelberg, Germany' : '',
      placeId: prefilledSignup ? 'ChIJzdzMDgXBl0cR1zokRADq5u8' : '',
      lat: prefilledSignup ? 49.3987524 : undefined,
      lng: prefilledSignup ? 8.672433500000011 : undefined,
    },
    // personal info
    birthDate: prefilledSignup ? '1990-03-24' : '',
    birthPlace: prefilledSignup ? 'Hamburg, Germany' : '',
    gender: prefilledSignup ? 'male' : '',
    // student-specific data
    youthOrganization: prefilledSignup ? 'Unicef' : '',
    grade: prefilledSignup ? '7' : '',
    schoolType: prefilledSignup ? 'Middle' : '',
    // tutor-specific data
    semester: prefilledSignup ? '5' : '',
    fieldOfStudy: prefilledSignup ? 'Theoretical Physics' : '',
    minStudentGrade: prefilledSignup ? '5' : '',
    maxStudentGrade: prefilledSignup ? '12' : '',
    // subjects info
    subjects: prefilledSignup ? ['Physics', 'Math', 'English', 'Biology'] : [],
  },
  personList: [],
  singlePersonView: null,
};