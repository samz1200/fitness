import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'https://beckend.vonelijahfitness.com/users';
const gymsUrl = 'https://beckend.vonelijahfitness.com/gymaddeds';
const gymOptionsUrl = 'https://beckend.vonelijahfitness.com/gyms';
const sendMailUrl = 'https://beckend.vonelijahfitness.com/sendmails';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const loginUser = async (user) => {
    return await axios.post(`${usersUrl}/login`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}

export const gymParticipate = async (gymdata) => {
    // console.log(gymdata)
    return await axios.post(`${gymsUrl}/addgym`, gymdata);
}
export const getGyms = async () => {
    return await axios.get(`${gymsUrl}/get`);
}

export const addGymOptions = async (gymdata) => {
    // console.log(gymdata)
    return await axios.post(`${gymOptionsUrl}/addgymoptions`, gymdata);
}
export const getGymOptions = async () => {
    return await axios.get(`${gymOptionsUrl}/getgymoptions`);
}

export const sendallMailAddress = async (mailObj) => {
    // console.log(gymdata)
    return await axios.post(`${sendMailUrl}/mailsend`, mailObj);
}
