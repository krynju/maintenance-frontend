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
    ['id', 'role', 'created', 'ticket', 'user']
  ),
  Failure: model(
    ['id', 'created', 'description', 'name'],
    ['id', 'description', 'name'],
  ),
  Machine: model(
    ['id', 'name', 'status', 'serialNumber', 'factoryNumber', 'description', 'localization']
  ),
  Ticket: model(
    ['id', 'name', 'description', 'priority', 'created', 'closed', 'status', 'machine', 'failure']
  ),
  User: model(
    ['id', 'level', 'type', 'firstName', 'lastName', 'code', 'created']
  ),
};
