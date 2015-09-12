class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :name
      t.string :username
    	t.string :email
    	t.string :password
      t.string :confirmation_code
    	t.string :responsible
    	t.belongs_to :user
    	t.belongs_to :role
    	t.string :status, default: :DEACTIVE
      t.timestamps null: false
    end
  end
end