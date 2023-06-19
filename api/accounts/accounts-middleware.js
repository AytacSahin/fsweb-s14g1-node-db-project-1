const accountsModel = require('./accounts-model');

exports.checkAccountId = async (req, res, next) => {
  try {
    const isExistID = await accountsModel.getById(req.params.id);
    if (!isExistID) {
      res.status(400).json({ message: "account not found" });
    } else {
      req.existUserID = isExistID
      next();
    }
  } catch (error) {
    next(error);
  }
}

exports.checkAccountPayload = (req, res, next) => {
  try {
    let { name, budget } = req.body;
    if (!name || !budget) {
      res.status(400).json({ message: "name and budget are required" });
    }
    if (name.trim().lengh < 3 || name.trim.length > 100) {
      res.status(400).json({ message: "name of account must be between 3 and 100" });
    }
    if (typeof bugdet !== "number") {
      res.status(400).json({ message: "budget of account must be a number" });
    }
    if (0 > bugdet || budget > 1000000) {
      res.status(400).json({ message: "budget of account is too large or too small" });
    }
  } catch (error) {
    next(error);
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const isExist = await accountsModel.getByName(req.body.name);
    if (!isExist) {
      res.status(400).json({ message: "that name is taken" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}
