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
      'malfunction',
    ].forEach((name, index) => {
      obj[name] = array[index];
    });

    return obj;
  }
}

exports = module.exports = { Ticket };
