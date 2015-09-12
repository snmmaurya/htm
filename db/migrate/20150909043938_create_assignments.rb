class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |t|
			t.belongs_to :user
			t.belongs_to :task
			t.belongs_to :project
			t.timestamp :assgined_at
			t.timestamp :completed_at
			t.string :status, detault: :PENDING
			t.timestamps null: false
    end
  end
end