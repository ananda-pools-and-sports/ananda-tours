import { useState } from "react";
import { Send, Loader2, Phone, Mail, MapPin } from "lucide-react";
import AlertModal from "../components/AlertModal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    if (formData.contactMethod === "whatsapp") {
      const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
      window.open(`https://wa.me/919131959638?text=${message}`, "_blank");
    } else {
      const subject = encodeURIComponent("Contact Form Submission");
      const body = encodeURIComponent(`
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Message: ${formData.message}
      `);
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=anandapoolsandsports@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );
    }
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      contactMethod: "email",
    });
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-heading text-ananda-orange mb-4 animate-fade-in-up">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            We'd love to hear from you! Reach out to us for any inquiries or
            support.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-2xl animate-fade-in-up"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-ananda-orange transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-ananda-orange transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-ananda-orange transition-all duration-300"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-ananda-orange transition-all duration-300 resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === "email"}
                        onChange={handleChange}
                        className="form-radio text-ananda-orange focus:ring-ananda-orange"
                      />
                      <Mail className="ml-2 text-ananda-orange" size={20} />
                      <span className="ml-1 text-gray-700">Email</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        checked={formData.contactMethod === "whatsapp"}
                        onChange={handleChange}
                        className="form-radio text-ananda-blue focus:ring-ananda-blue"
                      />
                      <svg
                        className="ml-2 text-ananda-blue w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span className="ml-1 text-gray-700">WhatsApp</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ananda-orange text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-ananda-yellow hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-ananda-orange focus:ring-opacity-50 flex items-center justify-center animate-breathe"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin mr-2" size={20} />
                  ) : (
                    <Send className="mr-2" size={20} />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white rounded-2xl p-8 shadow-2xl h-full flex flex-col justify-between animate-fade-in-up">
              <div>
                <h3 className="text-3xl font-bold text-ananda-orange mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin
                      className="text-ananda-orange mr-4 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-gray-600">
                      67 YAMUNA NAGAR, Darpan Colony, Gwalior, Thatipur, Gird,
                      Gwalior - 474001, Madhya Pradesh, India.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone
                      className="text-ananda-orange mr-4 flex-shrink-0"
                      size={24}
                    />
                    <a
                      href="tel:+919131959638"
                      className="text-gray-600 hover:text-ananda-orange transition-colors duration-300"
                    >
                      +91 91319 59638
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail
                      className="text-ananda-orange mr-4 flex-shrink-0"
                      size={24}
                    />
                    <a
                      href="mailto:anandasportstours@gmail.com"
                      className="text-gray-600 hover:text-ananda-orange transition-colors duration-300"
                    >
                      anandasportstours@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="text-ananda-orange mr-4 flex-shrink-0 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <a
                      href="https://wa.me/9131959638"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-ananda-orange transition-colors duration-300"
                    >
                      Click Here To Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-2xl font-semibold text-ananda-orange mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {["facebook", "instagram"].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-ananda-orange p-3 rounded-full transition-all duration-300 hover:bg-ananda-yellow hover:text-gray-800 animate-float"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertModal
        isOpen={isAlertOpen}
        onClose={closeAlert}
        message="Thank you for your message! We will get back to you soon."
      />
    </section>
  );
};

export default ContactSection;
