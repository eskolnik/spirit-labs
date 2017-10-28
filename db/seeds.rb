# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
EnergySource.destroy_all
RitualCode.destroy_all
RitualCompletion.destroy_all

small_rituals = ["Trick or Treat", "Spider Dance"]


small_rituals.each_with_index do |name, n|
  ritual = EnergySource.create({ name: name})
  RitualCode.create(energy_source: ritual, token: "abc#{n+1}", uses_remaining: 999)
end

lantern = EnergySource.create(
  name: "Jack o' Lanterns",
  energy_value: 10
)

RitualCode.create(energy_source: lantern, token: "jack1", uses_remaining: 1)
RitualCode.create(energy_source: lantern, token: "jack2", uses_remaining: 2)
RitualCode.create(energy_source: lantern, token: "jack3", uses_remaining: 3)

seance = EnergySource.create(
  name: "Seance",
  energy_value: 6
)

RitualCode.create(energy_source: seance, token: "seance1", uses_remaining: 2)
