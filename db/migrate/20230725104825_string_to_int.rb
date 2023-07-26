class StringToInt < ActiveRecord::Migration[6.1]
  def change
    change_column(:messages, :user_id, :int)
  end
end
