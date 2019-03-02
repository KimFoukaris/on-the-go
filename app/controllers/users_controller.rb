class UsersController < ApplicationController

    def index
        @users = User.all.order("name")
        render json: @users
    end

    def create
        @user = User.create!(user_params)
    end

    def update
        @user.update(user_params)
    end

    private

    def user_params
        params.permit(:name, :password)
    end
end
