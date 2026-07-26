import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGit, FaGithub, FaHackerrank, FaLinkedin, FaMapMarked, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault(); 

        alert(`Name: ${name}, Email: ${email}, Message:${message}`);

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In
                    <span className='text-purple'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Have a project in mind or want to collaborate? Let's talk!
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    <div className=''>
                        <form className='space-y-6' id='contactForm' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 
                                    outline-none' type='text' id='userName' value={name} 
                                    onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 
                                    outline-none' type='email' id='userEmail' value={email} 
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 
                                    py-3 outline-none' type='text' id='userMessage' value={message} 
                                    onChange={(e)=>setMessage(e.target.value)}/>
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium 
                            hover:bg-purple-700 transition duration-300 cursor-pointer'>Send</button>
                        </form>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div className=''>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Bengaluru, WhiteField</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div className=''>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>rai.raisanjeevkumar@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div className=''>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91 9718610586</p>
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href='https://github.com/sanjv102' className='w-12 h-12 rounded-full bg-dark-300 flex items-center 
                            justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                    <FaGithub />
                                </a>

                                <a href='https://www.linkedin.com/in/sanjeev-kumar-030a41151/' className='w-12 h-12 rounded-full bg-dark-300 flex items-center 
                            justify-center text-white hover:bg-blue hover:text-white transition duration-300'>
                                    <FaLinkedin />
                                </a>

                                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center 
                            justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                                    <FaTwitter />
                                </a>

                                <a href='https://www.hackerrank.com/profile/rai_raisanjeevk1' className='w-12 h-12 rounded-full bg-dark-300 flex items-center 
                            justify-center text-green-700 hover:bg-green-300 hover:text-white transition duration-300'>
                                    <FaHackerrank />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact