class Api::RitualCodesController < ApplicationController
  def create
    if ritual_code
      ritual_code.activate
    end
    redirect_to "/"
  end

  def ritual_code
    @ritual_code ||= RitualCode.find_by_token(params[:token])
  end
end
