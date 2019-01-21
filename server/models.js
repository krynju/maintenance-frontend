class Ticket {

  static fromArray(array) {
    const obj = new Ticket();

    [
      'id',
      'name',
      'description',
      'priority',
      'created',
      'closed',
      'status',
      'machine',
      'failure',
    ].forEach((name, index) => {
      obj[name] = array[index];
    });

    return obj;
  }
}

class Machine {

  static fromArray(array) {
    const obj = new Ticket();

    [
      'id',
      'name',
      'status',
      'serialNumber',
      'factoryNumber',
      'description',
      'localization',
    ].forEach((name, index) => {
      obj[name] = array[index];
    });

    return obj;
  }
}

class Failure {

  static fromArray(array) {
    const obj = new Ticket();

    [
      'id',
      'created',
      'description',
      'name',
    ].forEach((name, index) => {
      obj[name] = array[index];
    });

    return obj;
  }
}

class Assignment {

  static fromArray(array) {
    const obj = new Ticket();

    [
      'id',
      'role',
      'created',
      'ticket',
      'user',
    ].forEach((name, index) => {
      obj[name] = array[index];
    });

    return obj;
  }
}

exports = module.exports = {
  Ticket,
  Machine,
  Failure,
  Assignment,
};
