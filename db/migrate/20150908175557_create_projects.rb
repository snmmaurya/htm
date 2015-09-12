class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
    	t.string :title
    	t.text :description
    	t.integer :created_by
    	t.integer :completed_by
      t.timestamp :completed_at
      t.belongs_to :user
    	t.string :status, default: :ACTIVE
      t.timestamps null: false
    end
  end
end
