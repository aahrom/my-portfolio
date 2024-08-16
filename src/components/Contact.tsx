import React from "react";


const Contact: React.FC = () => {
    return (
        <section id="contact" className="min-h-screen p-8 pt-24 bg-gray-200 text-gay-900">
            <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
            <form
                action="https://formspree.io/f/{your-form-id"
                method="POST"
                className="max-w-xl mx-auto" > 
                
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input type="text"
                id="name"
                name="name"
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-required="true"/>

                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input 
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

                <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
            </form>
            </div>
        </section>
    )
}

export default Contact;