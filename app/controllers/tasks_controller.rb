class TasksController < ApplicationController
	before_action :get_user
	def tasks
		render json: Task.joins(:assignment).where("assignments.project_id=? AND assignments.user_id=?", params[:project_id], @user.id)
	end

	def task
		render json: (Task.find params[:task_id])
	end

	def create_task
		@task = Task.new(create_task_params)
		@task.user_id = @task.created_by =  @task.updated_by = @user.id
		# @task.project_id = params[:project_id]
		if @task.save
			render json: @task
		else
			render json: {status: :ERROR}
		end
	end

	def update_task
		@task = Task.find params[:params][:id]
		@task.updated_by = @user.id
		if @task.update(update_task_params)
			render json: @task
		else		
			render json: {status: :ERROR}
		end
	end

	def assign_to
		@assignment = Assignment.new(params.require(:params).permit(:user_id, :project_id, :task_id, :assgined_at))
		@assignment.assgined_at = Time.now
		if @assignment.save
			render json: {status: :COMPLETED}
		else
			render json: {status: :ERROR}
		end	
	end


=begin
=end	
	def create_comment
		@comment = @user.comments.create(params.require(:params).permit(:comment, :task_id))
		render json: @comment
	end

	def update_comment
		@comment = Comment.find(params[:params][:id])
		@comment.update(params.require(:params).permit(:comment))
		render json: @comment
	end	

	def upload
		binding.pry
		@attachment = Attachment.new()
		user.picture = params[:file]
    user.save
	end	

	def comments
		@comments = Comment.where(task_id: params[:task_id])
		render json: @comments
	end
=begin
=end

	def get_user
		@user = (params[:user_id].present?) ? (web_user params[:user_id]) : web_current_user
	end

	def create_task_params
		params.require(:params).permit(:title, :project_id, :user_id, :created_by, :updated_by)
	end

	def update_task_params
		params.require(:params).permit(:title, :description, :updated_by)
	end
	
	private :create_task_params	
end