class DisplayController < ApplicationController
  def index
  	
  	wiseCount = Wise.count
  	wiseIds = Wise.ids
  	pickId = Random.rand(wiseCount)
  	
  	@wises = Wise.find(wiseIds[pickId])
  end
end
