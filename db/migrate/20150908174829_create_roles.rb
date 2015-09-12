class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
    	t.string :title   #admin | super | user
    	t.string :status, default: :ACTIVE
      t.timestamps null: false
    end
  end
end