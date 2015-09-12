class UsersController < ApplicationController
	before_action :insure_signin, except: [:signin]
	def index

	end
	
	def signin
		user = User.find_by(email: params[:user][:email], password: params[:user][:password])
		create_user_session user if user.present?
		render json: user
	end

	def users
		render json: (users = User.where(user_id: super_user_id))
	end

	def parent_user
		render json: session[:current_user_id]
	end

	def is_parent_user
		render json: (session[:current_user_id])
	end

	def create_user_session user
		session[:current_user_id] = user.id
	end

	def destroy_user_session
		session[:current_user] = nil
	end

	def insure_signin
		render json: {status: "ERROR"} if session[:current_user_id].nil?
	end	
	
	private :create_user_session, :destroy_user_session	
end
