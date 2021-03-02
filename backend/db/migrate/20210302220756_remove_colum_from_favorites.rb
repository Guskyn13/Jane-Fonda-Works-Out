class RemoveColumFromFavorites < ActiveRecord::Migration[6.1]
  def change
    remove_column :favorites, :user_id
    add_reference :favorites, :user, index: true
  end
end
