class User < ApplicationRecord
    has_many :favorites
    has_many :exercises, through: :favorites
end
