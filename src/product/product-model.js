const firebaseAdmin = require('../utils/firebase');
const firestore = firebaseAdmin.firestore();
const productsDb = firestore.collection('products');

const createProduct = async ({ title }) => {
  await productsDb.doc().set({ title });
};

module.exports = {
  createProduct,
};
