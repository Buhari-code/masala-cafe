import api from "../api/axios";

export const createWeekendSpecial = async (restaurantId, weekendData) => {

    const response = await api.post(
        `/restaurant/${restaurantId}/create-weekend-special`,
        weekendData
    );

    return response.data;

};

export const updateWeekendSpecial = async (
    weekendSpecialId,
    weekendData
) => {

    const response = await api.patch(
        `/weekend-specials/${weekendSpecialId}`,
        weekendData
    );

    return response.data;

};

export const deleteWeekendSpecial = async (weekendSpecialId) => {

    const response = await api.delete(
        `/delete-weekend-specials/${weekendSpecialId}`
    );

    return response.data;

};

export const getWeekendSpecial = async(restaurantId) => {
    const response = await api.get(`/restaurant/${restaurantId}/get-weekend-special`)

    return response.data
}

export const weekendSpecialService = async() => {
    const response = await api.get('/weekend-special')
    return response?.data
}