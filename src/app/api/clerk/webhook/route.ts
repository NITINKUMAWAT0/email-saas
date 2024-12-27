import { db } from "~/server/db";

export const POST = async (req: Request) => {
  try {
    const { data } = await req.json();
    
    // Debug incoming data
    console.log('Received Data:', data);

    // Extract and validate fields
    const id = String(data.id); // Ensure it's a string
    const emailAddress = data.email_addresses?.[0]?.email_address || "unknown@example.com";
    const firstName = data.first_name || "Unknown";
    const lastName = data.last_name || null; // Optional
    const imageUrl = data.image_url || "https://example.com/default-image.png";

    // Log extracted values
    console.log('Extracted Data:', { id, emailAddress, firstName, lastName, imageUrl });

    // Create user in the database
    await db.user.create({
      data: {
        id,
        emailAddress,
        firstName,
        lastName,
        imageUrl,
      },
    });

    console.log('User created successfully');

    return new Response('Webhook received', { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/clerk/webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
