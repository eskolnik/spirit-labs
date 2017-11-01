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
RitualCode.create(energy_source: dare, token: "k32tKxIheR")

decorate = EnergySource.create(name: "decoration")
RitualCode.create(energy_source: decorate, token: "uzu6Whq93p")

alchemy = EnergySource.create(name: "alchemy")
RitualCode.create(energy_source: alchemy, token: "7BxZoMXyTI")

apple_bob = EnergySource.create(name: "apple_bob", energy_value: 5)
RitualCode.create(energy_source: apple_bob, token: "GLF5ut7HFH")

dionysus = EnergySource.create(name: "dionysus", energy_value: 15)
RitualCode.create(energy_source: dionysus, token: "P7HMzwXrPO")

lantern = EnergySource.create(name: "lantern", energy_value: 3)
RitualCode.create(energy_source: lantern, token: "3BOwax41tP")

ghost_stories = EnergySource.create(name: "ghost_stories", energy_value: 5)
RitualCode.create(energy_source: ghost_stories, token: "s5CVXVnDE3")

seance = EnergySource.create(name: "seance", energy_value: 10)
RitualCode.create(energy_source: seance, token: "nf7NUy9r1V", uses_remaining: 1)

time_Warp = EnergySource.create(name: "time_Warp", energy_value: 10)
RitualCode.create(energy_source: time_Warp, token: "dTx6K8JDbA", uses_remaining: 1)

final_ritual = EnergySource.create(name: "final_ritual", energy_value: 999999)
RitualCode.create(energy_source: final_ritual, token: "ynIYweyIGc", uses_remaining: 1)
