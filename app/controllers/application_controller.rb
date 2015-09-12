class ApplicationController < ActionController::Base
	respond_to :html, :js, :json, :xml
	protect_from_forgery # with: :exception
	before_action :csrf_cookie_angular



	def current_user
		render json: User.find(session[:current_user_id])
	end

	def web_user user_id
		User.find user_id
	end	

	def web_current_user
		current_user = User.find(session[:current_user_id])
	end

	def super_user
		user = web_current_user
		super_user = (user.user_id.present?) ? user.user_id : user.id
		User.find(super_user)
	end	

	def super_user_id
		user = web_current_user
		super_user_id = (user.user_id.present?) ? user.user_id : user.id		
	end	


































	# before_action :parse_request, :authenticate_user_from_token!

	# def authenticate_user_from_token!
	# 	if !@json[:authorize_token]
	# 		render nothing: true, status: :unauthorized
	# 	else
	# 		# Codes
	# 	end
	# end

	# def parse_request
	# 	binding.pry
	# 	@json = {nothing: true, status: :unauthorized, api_token: :SNmMaurya}
	# 	# @json = JSON.parse(request.body.read)
	# end

	def csrf_cookie_angular
		cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
	end

	def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  protected :verified_request?
	private :csrf_cookie_angular
	# private :authenticate_user_from_token!, :parse_request
end
