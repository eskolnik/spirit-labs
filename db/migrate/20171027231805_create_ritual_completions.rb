class CreateRitualCompletions < ActiveRecord::Migration[5.1]
  def change
    create_table :ritual_completions do |t|
      t.references :energy_source
      
      t.timestamps
    end
  end
end
