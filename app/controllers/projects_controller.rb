class ProjectsController < ApplicationController
	def projects
		render json: super_user.projects
	end	
end
