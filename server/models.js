function model(readFields, writeFields) {
  return {
    fromArray(array) {
      const obj = {};

      readFields.forEach((name, index) => {
        obj[name] = array[index];
      });

      return obj;
    },
    toArray(obj) {
      const array = [];

      writeFields.forEach((name, index) => {
        array[index] = obj[name];
      });

      return array;
    }
  }
}

exports = module.exports = {
  Assignment: model(
    ['id', 'role', 'created', 'ticket', 'user'],
    ['role', 'ticket'],
  ),
  Failure: model(
    ['id', 'created', 'description', 'name'],
    ['description', 'name'],
  ),
  Machine: model(
    ['id', 'name', 'status', 'serialNumber', 'factoryNumber', 'localization'],
    ['name', 'status', 'serialNumber', 'factoryNumber', 'localization'],
  ),
  Ticket: model(
    ['id', 'name', 'description', 'priority', 'created', 'closed', 'status', 'machine', 'failure'],
    ['name', 'description', 'priority', 'status', 'machine', 'failure'],
  ),
  User: model(
    ['id', 'level', 'type', 'firstName', 'lastName', 'code', 'created'],
  ),
};
