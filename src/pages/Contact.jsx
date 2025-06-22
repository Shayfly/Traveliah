import React from 'react';

function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">צור קשר</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="שם מלא" className="border p-2" />
        <input type="email" placeholder="אימייל" className="border p-2" />
        <textarea placeholder="הודעה" className="border p-2"></textarea>
        <button className="bg-blue-600 text-white p-2">שלח</button>
      </form>
    </section>
  );
}

export default Contact;