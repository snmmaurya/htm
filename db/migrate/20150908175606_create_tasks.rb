class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
    	t.string :title
    	t.text :description
    	t.integer :created_by
    	t.integer :completed_by
      t.timestamp :completed_at
      t.belongs_to :user
      t.belongs_to :project
    	t.string :status, default: :PENDING
      t.timestamps null: false
    end
  end
end
