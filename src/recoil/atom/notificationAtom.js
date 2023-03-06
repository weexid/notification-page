import { atom } from "recoil";
import { notifData } from "../../data/notificationData";

export const dataNotification = atom({
    key: 'dataNotification',
    default: notifData,
})