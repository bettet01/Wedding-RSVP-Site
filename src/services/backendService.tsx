import axios from "axios";
import {db} from "../firebase/firebaseConfig";


export const postRsvp = (payload) => {
    return axios
        .post(
            "https://us-central1-ethanandjackie-f71f0.cloudfunctions.net/app/api/create",
            payload,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
}


export const getRsvps = async () => {
    const items: any = [];
    await db.collection('weddingEntry').get().then((data) => {
        data.docs.forEach((guest) => {
            const result = guest.data();
            items.push(result);
        })
    })
    return items;
}