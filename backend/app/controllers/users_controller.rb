class UsersController < ApplicationController
    def login
        @user = User.find_by(username: params[:username])
        if @user 
            if @user.password == params[:password]
                render json: @user, include: :favorites
            else 
                render json: {error: "Wrong Password"}
            end
        else
            render json:{error: "User Not Found"}
        end
    end

    def index
        @user = User.find(params[:user_id])
        json render: @user
    end

    def create
        @new_user = User.create(username: params[:username], password: params[:password])
        render json: @new_user, include: :favorites
    end 
end
