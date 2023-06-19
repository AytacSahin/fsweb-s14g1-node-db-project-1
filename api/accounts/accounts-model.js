const db = require('../../data/db-config')

const getAll = () => {
  /*
  SELECT * 
  FROM [Accounts]
  */
  return db("accounts");
}

const getById = (id) => {
  /*
  SELECT * 
  FROM [Accounts]
  WHERE id = {id}
  */
  return db("accounts").where("id", id).first(); // first: array'in ilk objesi
}

const create = async (account) => {
  const [id] = await db("accounts").insert(account);
  return getById(id);
}

const updateById = async (id, account) => {
  await db("accounts").where("id", id).update(account);
  return getById(id);
}

const deleteById = (id) => {
  return db("accouns").where("id", id).del();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
