
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          votes: 35,
          url: 'http://www.google.com',
          title: 'Yo google'
        }, {
          votes: 14,
          url: 'http://www.yahoo.com',
          title: 'Yaaa'
        }, {
          votes: 6,
          url: 'http://www.twitch.tv',
          title: 'watch'
        }
      ])
    })
}
