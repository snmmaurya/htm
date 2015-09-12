class AddUpdateByToTask < ActiveRecord::Migration
  def change
  	add_column :tasks, :updated_by, :integer
  end
end
