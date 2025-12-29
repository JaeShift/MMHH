import type { Metadata } from "next";
import BookingPageClient from "./BookingPageClient";

export const metadata: Metadata = {
  title: "Request an Appointment | Modern Mental Health & Hormones",
  description:
    "Request an appointment with Modern Mental Health & Hormones. New patient consultations and existing patient follow-ups available via telehealth and in-person options.",
  alternates: { canonical: "/book" },
};

export default function BookingPage() {
  return <BookingPageClient />;
}

