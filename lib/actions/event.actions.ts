"use server";

import { connectToDatabase } from "../mongodb/database";
import { handleError } from "../utils";
import Event from "../mongodb/database/models/event.model";
import { CreateEventParams } from "@/types";
import User from "../mongodb/database/models/user.model";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);

    if (!organizer) {
      throw new Error("Organizer not found");
    }

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
};
