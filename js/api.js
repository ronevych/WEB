const BASE_URL = "http://localhost:5050/api";
const RESOURSE_URL = `${BASE_URL}/hotel`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


const getAllHotels = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

const postHotel = (body) => baseRequest({ method: "POST", body });

const updateHotel = (body) =>
    baseRequest({ method: "PUT", body });

const deleteHotelById = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });