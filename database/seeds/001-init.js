exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const departments = [
    {
      name: "human resources", // will get id 1
    },
    {
      name: "accounting", // will get id 2
    },
    {
      name: "marketing", // will get id 3
    },
  ];

  return knex("departments")
    .insert(departments)
    .then(() => console.log("\n== Seed data for department table added. ==\n"));
};
