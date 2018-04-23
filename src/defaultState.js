const emptyState = false;

const defaultAppState = {
  user: {
    type: 'student',
    location: ''
  },
  signUpData: {
    // account info
    firstname: emptyState ? '' : 'Jack',
    lastname: emptyState ? '' : 'the Ripper',
    password: emptyState ? '' : 'abcdefgh',
    confirmPassword: emptyState ? '' : 'abcdefgh',
    email: emptyState ? '' : 'jacky@theripper.com',
    // contact info
    phone: emptyState ? '' : '+34 4321 123 523',
    address: emptyState ? {} : {
      street: emptyState ? '' : 'Long Lane',
      number: emptyState ? '' : '42',
      city: emptyState ? '' : 'Paradise City',
      zip: emptyState ? '' : '6942',
      country: emptyState ? '' : 'Wonderland',
    },
    // personal info
    birthday: emptyState ? '' : '2000-01-01',
    birthplace: emptyState ? '' : 'Honolulu',
    gender: emptyState ? '' : 'female',
    // student-specific data
    youthOrganization: emptyState ? '' : 'Unicef',
    grade: emptyState ? '' : '7',
    schoolType: emptyState ? '' : 'vocational',
    // tutor-specific data
    semester: emptyState ? '' : '5',
    fieldOfStudy: emptyState ? '' : 'Theoretical Physics',
    // subjects info
    subjects: emptyState ? [] : [{name: 'Physics', grade: 7},{name: 'Math', grade: 5},{name: 'English', grade: 8}],
  },
  tutorsList: [],
  studentsList: []
}

export default defaultAppState;