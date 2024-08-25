import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
    };

    try {
        const res = await fetch(`${API_URL}${endpoint}`, options);

        // Check if the response is okay
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        // Call json() to parse the response body as JSON
        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        return null; // Return null in case of error
    }
};
