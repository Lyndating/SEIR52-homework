class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.text :name
      t.text :country
      t.text :population
      t.text :image
      t.float :metropolitan_area
      t.timestamps
    end
  end
end
