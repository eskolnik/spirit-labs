class RitualCode < ApplicationRecord
  belongs_to :energy_source

  def activate
    if self.uses_remaining >=1
      self.energy_source.increment
      self.update_attributes(uses_remaining: self.uses_remaining - 1)
    end
  end
end
