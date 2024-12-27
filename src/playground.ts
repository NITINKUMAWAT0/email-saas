    import { db } from "./server/db";

    await db.user.create({
        data: {
          emailAddress: "testemail@gmail.com",
          firstName: "Nitin",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_k9IjkXAaiUD5vn_MAfEG7odycuC0wwOXbw&s",
        },
      });
      
      console.log("done");