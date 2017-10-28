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

dare = EnergySource.create(name: "dare")
RitualCode.create(energy_source: dare, token: "dare")

decorate = EnergySource.create(name: "decoration")
RitualCode.create(energy_source: decorate, token: "decoration")

alchemy = EnergySource.create(name: "alchemy")
RitualCode.create(energy_source: alchemy, token: "alchemy")

apple_bob = EnergySource.create(name: "apple_bob", energy_value: 5)
RitualCode.create(energy_source: apple_bob, token: "apple_bob")

dionysus = EnergySource.create(name: "dionysus", energy_value: 15)
RitualCode.create(energy_source: dionysus, token: "dionysus")

lantern = EnergySource.create(name: "lantern", energy_value: 3)
RitualCode.create(energy_source: lantern, token: "lantern")

ghost_stories = EnergySource.create(name: "ghost_stories", energy_value: 5)
RitualCode.create(energy_source: ghost_stories, token: "ghost_stories")

seance = EnergySource.create(name: "seance", energy_value: 10)
RitualCode.create(energy_source: seance, token: "seance", uses_remaining: 1)

final_ritual = EnergySource.create(name: "final_ritual", energy_value: 999999)
RitualCode.create(energy_source: final_ritual, token: "BEAST MASTER", uses_remaining: 99)



#
# small_rituals = ["Trick or Treat", "Spider Dance"]
# small_rituals.each_with_index do |name, n|
#   ritual = EnergySource.create({ name: name})
#   RitualCode.create(energy_source: ritual, token: "abc#{n+1}", uses_remaining: 999)name
# end
#
# lantern = EnergySource.create(
#   name: "Jack o' Lanterns",
#   energy_value: 10
# )
#
# RitualCode.create(energy_source: lantern, token: "jack1", uses_remaining: 1)
# RitualCode.create(energy_source: lantern, token: "jack2", uses_remaining: 2)
# RitualCode.create(energy_source: lantern, token: "jack3", uses_remaining: 3)
#
# seance = EnergySource.create(
#   name: "Seance",
#   energy_value: 6
# )
#
# RitualCode.create(energy_source: seance, token: "seance1", uses_remaining: 2)
