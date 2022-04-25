class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :born
      t.date :dob
      t.text :instrument
      t.text :image
      t.timestamps  #created_at, updated_at
    end
  end
end
