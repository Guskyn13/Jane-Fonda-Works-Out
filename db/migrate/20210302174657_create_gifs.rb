class CreateGifs < ActiveRecord::Migration[6.1]
  def change
    create_table :gifs do |t|
      t.string :name
      t.string :gif_url

      t.timestamps
    end
  end
end
