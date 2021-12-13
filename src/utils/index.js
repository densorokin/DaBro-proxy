const convertSnapshotToJson = (snapshot) => {
  const result = [];

  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });

  return result;
};

module.exports = {
  convertSnapshotToJson,
};
