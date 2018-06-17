# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bench.delete_all
User.delete_all

Bench.create!(
  description: 'alamo square, many dogs',
  lat: 37.775769,
  lng: -122.434960,
)

Bench.create!(
  description: 'UN plaza, food truck access',
  lat: 37.779760,
  lng: -122.413820,
)

Bench.create!(
  description: 'Ocean Beach, gnarly breh',
  lat: 37.769996,
  lng: -122.511281,
)

User.create!(
  username: 'guest',
  password: 'password'
)
