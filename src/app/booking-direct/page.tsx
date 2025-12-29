"use client";

export default function BookingDirectPage() {
  return (
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <h1 style={{ textAlign: "center", padding: "20px 0" }}>Book Your Appointment</h1>
      
      {/* Try direct iframe approach */}
      <iframe
        src="https://modernmentalhealthhormones.practicebetter.io/#/booking?hash=68f453c28551a5c6aa0369e4"
        style={{
          width: "100%",
          height: "calc(100vh - 100px)",
          border: "none",
          display: "block",
        }}
        title="Practice Better Booking"
        allow="payment"
      />
    </div>
  );
}

