module.exports.validateRead = (res, resourceName, results) => {
  if (results) {
    res.status(200).send(results);
    return;
  }
  if (results === null || results === false) {
    res.status(404).send({
      error: `${resourceName} not found`,
    });
    return;
  }
  res.status(500).send({
    message: results,
  });
};

module.exports.validateUpdate = (res, resourceName, results) => {
  if (results) {
    res.status(200).send(results);
    return;
  }
  if (results === null || results === false) {
    res.status(404).send({
      error: `${resourceName} not found`,
    });
    return;
  }
  res.status(500).send({
    message: results,
  });
};

module.exports.validateDelete = (res, resourceName, results) => {
  if (results === true) {
    res.sendStatus(204);
    return;
  }
  if (results === null || results === false) {
    res.status(404).send({
      error: `${resourceName} not found`,
    });
    return;
  }
  res.status(500).send({
    message: results,
  });
};

module.exports.validateCreate = (res, resourceName, results) => {
  if (results === true) {
    res.sendStatus(201);
    return;
  }
  if (results === false) {
    res.status(200).send({
      error: `${resourceName} was not created`,
    });
    return;
  }
  res.status(500).send({
    message: results,
  });
};
