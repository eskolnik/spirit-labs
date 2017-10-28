class Api::RitualCompletionsController < ApplicationController
  def index
    rituals = RitualCompletion.all.sort_by{|elt| elt.created_at }.reverse.map do |ritual|
      {
        ritual: ritual,
        source: ritual.energy_source.name
      }
    end
    render json: rituals
  end

end
