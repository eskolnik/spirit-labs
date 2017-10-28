class CreateRitualCodes < ActiveRecord::Migration[5.1]
  def change
    create_table :ritual_codes do |t|
      t.references :energy_source
      t.string :token, unique: true
      t.integer :uses_remaining, default: 9999
    end
  end
end
