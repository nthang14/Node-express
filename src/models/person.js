var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Person", // Will use table name `category` as default behaviour.
  tableName: "person", // Optional: Provide `tableName` property to override the default behaviour for table name.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    lastName: {
      type: "varchar",
    },
    firstName: {
      type: "varchar",
    },
    address: {
      type: "varchar",
    },
    city: {
      type: "varchar",
    },
  },
});
