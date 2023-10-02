import axios from "axios";

export async function getUserSummary(userId: number) {
    try {
        const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const response = `${userData.data.name} (${userData.data.username}) - ${userData.data.email}`
        return (response);
    } catch (error) {
        throw new Error("User not found");
    }
}
getUserSummary(1)
    .then((summary) => console.log(summary))
    .catch((error) => console.error(error));
