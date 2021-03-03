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
        render json: @new_favorite
    end

    def destroy
        @favorite = Favorite.find_by(exercise_id: params[:id])
        @favorite.delete
        render json: {message: "Favorite Deleted"}
    end
end
