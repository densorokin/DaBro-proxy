const { firestore } = require('../utils/firebase');
const productsRef = firestore.collection('products');
const categoriesRef = firestore.collection('categories');
const { convertSnapshotToJson } = require('../utils');

// create
// findAll
// findOne
// update
// delete
// deleteAll
// findAllPublished

const getProducts = async () => {
  let productsList;

  try {
    const productsSnapshot = await productsRef.get();
    productsList = convertSnapshotToJson(productsSnapshot);
  } catch (e) {
    console.log('[getProducts] error', e.message);
  }

  return productsList;
};

const createProduct = async ({ email, phoneNumber, password, firstName, lastName, birthday }) => {
  let createProductResult;
  try {
    createProductResult = await productsRef.doc().set({ title: 'TEST' });
  } catch (e) {
    console.log('[createProduct] error', e.message);
  }

  return createProductResult;
};

const getAllData = async () => {
  let products;
  let categories;
  try {
    const productsSnapshot = await productsRef.get();
    products = convertSnapshotToJson(productsSnapshot);

    const categoriesSnapshot = await categoriesRef.orderBy('orderPosition').get();
    categories = convertSnapshotToJson(categoriesSnapshot);
  } catch (e) {
    console.log('[getAllData] error', e.message);
  }

  return { products, categories };
};

module.exports = {
  getProducts,
  createProduct,
  getAllData,
};
