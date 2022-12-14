import { stringify } from "querystring";

export default {
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    {
      name: "roomName",
      title: "Room Name",
      description: "Name Of the ROom",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "roomTypeId",
      title: "RoomTypeId",
      type: "string"
    },
    {
      name: "maxGuest",
      title: "MaxGuests",
      type: "string"
    },
    {
      name: "imageSmallFirst",
      title: "ImageSmallFirst",
      type: "image",
    },
    {
      name: "imageSmallSecond",
      title: "ImageSmallSecond",
      type: "image",
    },
    {
      name: "imageSmallThird",
      title: "ImageSmallThird",
      type: "image",
    },
    {
      name: "imageSmallFourth",
      title: "ImageSmallFourth",
      type: "image",
    },
    {
      name: "offerPrice",
      title: "OfferPrice",
      description:"Enter only percentage number (without %)",
      type: "string",
      initialValue: '0',
    }

  ],
  
}
