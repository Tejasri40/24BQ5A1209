import axios from "axios";

export const getNotifications = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/top-notifications"
    );

    return response.data.topNotifications || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};