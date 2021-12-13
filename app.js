const express = require('express');
const cors = require('cors');
const config = require('config');
const router = express.Router();

const app = express();
const port = 3000;

// Allow CORS
app.use(cors(config.get('cors')));

app.use('/api', router);

router.use('/products', require('./src/product/product-router'));

// app.get('/user', async (req, res) => {
//   try {
//     firebaseAdmin.auth().createUser({
//       email: 'a@aaa.com',
//       emailVerified: false,
//       phoneNumber: '+12223334445',
//       password: 'qwertyuiop;lkjhgfdsa',
//       displayName: 'req.body.user.name',
//       disabled: false,
//     });
//     res.json({ message: 'User Created' });
//   } catch (e) {
//     console.log(e);
//     res.json({ message: 'Error creating user' });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
