import Cookies from "js-cookie";
const generateRandomUuidWithTimestamp = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let uuid = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    uuid += chars[randomIndex];
  }

  const timestamp = new Date().getTime();
  uuid += timestamp.toString();

  return uuid;
};

export const setGuestId = () => {
  const newGuestId = generateRandomUuidWithTimestamp();

  if (!Cookies.get("guestId") || Cookies.get("guestId") === undefined) {
    // Set the guest ID in cookies
    Cookies.set("guestId", newGuestId, { expires: 7 }); // Expires in 7 days
  }
};
