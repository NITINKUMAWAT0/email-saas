// api/clerk/webhook

import { db } from "~/server/db";

export const POST = async(req: Request) => {
const {data} = await req.json()
// console.log("clerk webhook received", data);
const id = data.id
const emailAddress = data.email_addresses[0].email_address
const firstName = data.first_name
const lastName = data.last_name
const imageUrl = data.image_url

console.log('Received Data:', data);  // Check the structure of the data
console.log('User ID:', data.id);  // Ensure this is a string



await db.user.create({
    data: {
        id: id,
        emailAddress:emailAddress,
        firstName:firstName,
        lastName:lastName,
        imageUrl:imageUrl
    }
})

console.log('user created')


return new Response('Webhook received', {status: 200});

}
