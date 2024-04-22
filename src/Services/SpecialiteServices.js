// import Api from "../Axios/Api";
// // const SPECIALITE_API = "/specialite"

// const SPECIALITE_API = "http://localhost:5000/api/specialite"

// export const fetchSpecialite = async () => {
//     return await Api.get(SPECIALITE_API);
// }
// //
// export const fetchSpecialiteById = async (specialiteId) => {
//     return await Api.get(SPECIALITE_API + '/' + specialiteId);
// }
// export const deleteSpecialite = async (specialiteId) => {
//     return await Api.delete(SPECIALITE_API + '/' + specialiteId);
// }
// export const addSpecialite = async (specialite) => {
//     return await Api.post("" + SPECIALITE_API, specialite);
// }
// export const editSpecialite = (specialite) => {
//     return Api.put(SPECIALITE_API + '/' + specialite.id, specialite);
// }

// const SPECIALITE_API = "http://localhost:5000/api/specialite";
import Api from "../Axios/Api";
const SPECIALITE_API = "specialite"; // Utilisation d'une URL relative

export const fetchSpecialite = async () => {
    return await Api.get(SPECIALITE_API);
}

export const fetchSpecialiteById = async (specialiteId) => {
    return await Api.get(`${SPECIALITE_API}/${specialiteId}`);
}

export const deleteSpecialite = async (specialiteId) => {
    return await Api.delete(`${SPECIALITE_API}/${specialiteId}`);
}

export const addSpecialite = async (specialite) => {
    return await Api.post(SPECIALITE_API, specialite);
}

export const editSpecialite = async (specialite) => {
    return await Api.put(`${SPECIALITE_API}/${specialite.id}`, specialite);
}
