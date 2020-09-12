
exports.seed = async function(knex) {
  await knex("smurfs").truncate()

  return knex("smurfs").insert([
    {name: "Papa Smurf", age: 570},
    {name: "Smurfette", age: 480},
    {name: "Brainey", age: 430},
    {name: "Hefty", age: 430},
    {name: "Happy", age: 410},
    {name: "Baby", age: 100},
  ])
};
