class EnergySource < ApplicationRecord
  has_many :ritual_codes

  def increment
    if !self.exhausted
      new_total = self.energy_produced + self.energy_value
      self.update_attributes(energy_produced: new_total)
    end
  end
end
