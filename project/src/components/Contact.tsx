import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <ContactInfo
                icon={Mail}
                title="Email"
                content="john.doe@example.com"
                href="mailto:john.doe@example.com"
              />
              <ContactInfo
                icon={Phone}
                title="Phone"
                content="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              <ContactInfo
                icon={MapPin}
                title="Location"
                content="San Francisco, CA"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, title, content, href }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper
      href={href}
      className={`flex items-center gap-4 p-4 rounded-lg bg-gray-50 ${
        href ? 'hover:bg-gray-100 transition' : ''
      }`}
    >
      <Icon className="w-5 h-5 text-blue-600" />
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </Wrapper>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}