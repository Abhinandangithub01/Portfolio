import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-background" id="contact">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Get in <span className="text-primary">Touch</span></h2>
                        <p className="text-muted-foreground text-lg">
                            Open to new opportunities in Product Management and HR Tech.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
                        <a href="mailto:mail2abhinandan01@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group">
                            <div className="p-3 bg-pink-500/10 text-pink-500 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Email</h3>
                                <p className="text-muted-foreground text-sm break-all">mail2abhinandan01@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group cursor-default">
                            <div className="p-3 bg-cyan-500/10 text-cyan-500 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Phone</h3>
                                <p className="text-muted-foreground text-sm">+91 6379577244</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group cursor-default">
                            <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Location</h3>
                                <p className="text-muted-foreground text-sm">Karur, Tamil Nadu, India</p>
                            </div>
                        </div>

                        <a href="https://www.linkedin.com/in/abhi-nandan-r" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group">
                            <div className="p-3 bg-blue-600/10 text-blue-600 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">LinkedIn</h3>
                                <p className="text-muted-foreground text-sm">/in/abhi-nandan-r</p>
                            </div>
                        </a>
                    </div>

                    <div className="pt-8 border-t border-border">
                        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Abhinandan R. All rights reserved.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
