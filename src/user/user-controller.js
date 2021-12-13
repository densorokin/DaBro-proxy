import firebaseAdmin from '../utils/firebase';

var referencePath = '/Users/' + 1 + '/';
var userReference = firebaseAdmin.database().ref(referencePath);

const getUser = () => {
  return 'user';
};

const createUser = ({ email, phoneNumber, password, firstName, lastName, birthday }) => {
  try {
    firebaseAdmin
      .auth()
      .createUser({
        email: 'a@aaa.com',
        emailVerified: false,
        phoneNumber: '+12223334445',
        password: 'qwertyuiop;lkjhgfdsa',
        displayName: 'req.body.user.name',
        disabled: false,
      })
      .then((res) => {
        console.log('--res', res);
        res.json({ message: 'User Created' });
      });
  } catch (e) {
    console.log(e);
    res.json({ message: 'Error creating user' });
  }
};

module.exports = {
  getUser,
  createUser,
};
