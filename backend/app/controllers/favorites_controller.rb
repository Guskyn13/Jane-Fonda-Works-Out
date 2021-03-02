class FavoritesController < ApplicationController

    def index
        @favorites = Favorite.all
        render json: @favorites
    end

    def show
        @favorite = Favorite.find(params[:id])
        render json: @favorite
    end

    def create
        @new_favorite = Favorite.create(user_id: params[:user_id], exercise_id: params[:exercise_id])
    end
end
