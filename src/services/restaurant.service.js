import api from "../api/axios";

export const getRestaurants = async () => {
    const response = await api.get("/restaurants");

    return response.data;
};

export const getRestaurant = async (restaurantId) => {
    const response = await api.get(`/restaurant/${restaurantId}`);

    return response.data;
};

export const updateRestaurant = async (restaurantId, restaurantData) => {

    const response = await api.patch(
        `/update-restaurant/${restaurantId}`,
        restaurantData
    );

    return response.data;
};

export const getWeekendSpecials = async (restaurantId) => {

    const response = await api.get(
        `/restaurant/${restaurantId}/get-weekend-special`
    );

    return response.data;

};

export const getBusinessHours = async() => {
    const response = await api.get('/business-hours')

    return response?.data
}