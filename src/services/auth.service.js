import api from "../api/axios";

export const login = async (data) => {
    const response = await api.post("/login", data);

    return response.data;
};

export const logout = async () => {

    const response = await api.post("/logout");

    return response.data;

};