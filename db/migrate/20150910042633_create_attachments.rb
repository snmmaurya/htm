class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
    	t.belongs_to :project
    	t.belongs_to :task
    	t.belongs_to :user
    	t.string :attachment
			t.timestamps null: false
    end
  end
end
