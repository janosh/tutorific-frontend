const emptySignUp = false;

export default {
  app: {
    loginPanelVisible: false,
    loadingStudents: false,
    loadingTutors: false,
    loginEmail: '',
    loginPassword: '',
    loginUserType: 'student',
    signupUserType: 'student',
    filtersUserType: 'student',
  },
  user: {
    location: {},
    locationChoice: {},
    loggedIn: false
  },
  signUpData: {
    // account info
    firstname: emptySignUp ? '' : 'Jack',
    lastname: emptySignUp ? '' : 'the Ripper',
    password: emptySignUp ? '' : 'abcdefgh',
    confirmPassword: emptySignUp ? '' : 'abcdefgh',
    email: emptySignUp ? '' : 'jacky@theripper.com',
    // contact info
    phone: emptySignUp ? '' : '+34 4321 123 523',
    address: emptySignUp ? {} : {
      street: emptySignUp ? '' : 'Long Lane',
      number: emptySignUp ? '' : '42',
      city: emptySignUp ? '' : 'Paradise City',
      zip: emptySignUp ? '' : '6942',
      country: emptySignUp ? '' : 'Wonderland',
    },
    // personal info
    birthday: emptySignUp ? '' : '2000-01-01',
    birthplace: emptySignUp ? '' : 'Honolulu',
    gender: emptySignUp ? '' : 'female',
    // student-specific data
    youthOrganization: emptySignUp ? '' : 'Unicef',
    grade: emptySignUp ? '' : '7',
    schoolType: emptySignUp ? '' : 'vocational',
    // tutor-specific data
    semester: emptySignUp ? '' : '5',
    fieldOfStudy: emptySignUp ? '' : 'Theoretical Physics',
    // subjects info
    subjects: emptySignUp ? [] : [{name: 'Physics', grade: 7},{name: 'Math', grade: 5},{name: 'English', grade: 8},{name: 'Biology', grade: 12}],
  },
  tutorsList: [],
  studentsList: []
};