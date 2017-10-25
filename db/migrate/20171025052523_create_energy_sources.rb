class CreateEnergySources < ActiveRecord::Migration[5.1]
  def change
    create_table :energy_sources do |t|
      t.string :name, null: false
      t.text :description
      t.integer :energy_value, default: 1
      t.integer :energy_produced, default: 0
      t.boolean :exhausted, default: :false
    end
  end
end
