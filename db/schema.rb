# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171025053253) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "energy_sources", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.integer "energy_value", default: 1
    t.integer "energy_produced", default: 0
    t.integer "exhausted"
  end

  create_table "ritual_codes", force: :cascade do |t|
    t.bigint "energy_source_id"
    t.string "token"
    t.integer "uses_remaining", default: 1
    t.index ["energy_source_id"], name: "index_ritual_codes_on_energy_source_id"
  end

end
