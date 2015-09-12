class Attachment < ActiveRecord::Base
	belongs_to :project
	belongs_to :task
	belongs_to :user
	mount_uploader :attahment, FileUploader
end
