
import { z } from "zod"

export const homepageBookingSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  serviceType: z.string().min(1, "Service type is required"),
  preferredDate: z.string().min(1, "Select a date"),
  preferredTime: z.string().min(1, "Select a time"),
  propertyAddress: z.string().min(1, "Property address is required"),
})

export type HomepageBookingSchema = z.infer<typeof homepageBookingSchema>
