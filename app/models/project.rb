class Project < ActiveRecord::Base
	belongs_to :user   #User must be SUPER
	has_many :tasks
	has_many :assignments
	has_many :attachments
end