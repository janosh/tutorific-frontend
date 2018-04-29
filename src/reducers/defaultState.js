const prefilledSignup = true;

export default {
  filters: {
    userType: 'student',
  },
  login: {
    showLoginModal: false,
    email: '',
    password: '',
    userType: 'student',
  },
  user: {
    location: {},
    locationChoice: {},
    loggedIn: false,
    token: '',
  },
  signup: {
    // account info
    firstname: prefilledSignup ? 'Jack' : '',
    lastname: prefilledSignup ? 'the Ripper' : '',
    password: prefilledSignup ? 'yxcvbnm' : '',
    confirmPassword: prefilledSignup ? 'yxcvbnm' : '',
    email: prefilledSignup ? 'jacky@theripper.com' : '',
    userType: 'student',
    // contact info
    phone: prefilledSignup ? '+34 4321 123 523' : '',
    address: prefilledSignup ? {} : {
      street: prefilledSignup ? 'Long Lane' : '',
      number: prefilledSignup ? '42' : '',
      city: prefilledSignup ? 'Paradise City' : '',
      zip: prefilledSignup ? '6942' : '',
      country: prefilledSignup ? 'Wonderland' : '',
    },
    // personal info
    birthday: prefilledSignup ? '2000-01-01' : '',
    birthplace: prefilledSignup ? 'Honolulu' : '',
    gender: prefilledSignup ? 'female' : '',
    // student-specific data
    youthOrganization: prefilledSignup ? 'Unicef' : '',
    grade: prefilledSignup ? '7' : '',
    schoolType: prefilledSignup ? 'middle' : '',
    // tutor-specific data
    semester: prefilledSignup ? '5' : '',
    fieldOfStudy: prefilledSignup ? 'Theoretical Physics' : '',
    // subjects info
    subjects: prefilledSignup ? ['Physics', 'Math', 'English', 'Biology'] : [],
  },
  tutorsList: [],
  studentsList: [],
  singlePersonView: null,
};