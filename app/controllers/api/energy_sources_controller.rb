class Api::EnergySourcesController < ApplicationController
  def index
    sources = EnergySource.all
    energy_total = sources.map(&:energy_produced).reduce(:+)
    render json: {
      # sources: sources,
      energy_total: energy_total
    }
  end
end
