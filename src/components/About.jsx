import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, Zap } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: <Code size={24} />, title: 'Tech Native', desc: 'B.Tech in CS & Cybersecurity background' },
        { icon: <Users size={24} />, title: 'People First', desc: 'Improving processes for engineering & sales' },
        { icon: <Lightbulb size={24} />, title: 'Product Vision', desc: 'Discovery to delivery ownership' },
        { icon: <Zap size={24} />, title: 'Rapid Execution', desc: 'Agile & Scrum mastery' },
    ];

    return (
        <section className="py-20 bg-background/50" id="about">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">About <span className="text-primary">Me</span></h2>
                        <div className="bg-card border border-border p-8 rounded-2xl shadow-sm text-lg leading-relaxed text-muted-foreground space-y-6">
                            <p>
                                I am an experienced <strong className="text-foreground">Technical Product Manager / Developer</strong> with a strong background in HR Tech and SaaS platforms. I specialize in translating customer needs into impactful product features, owning the product lifecycle from discovery to delivery.
                            </p>
                            <p>
                                I have hands-on experience with PRD creation, UI design collaboration, roadmap planning, sprint execution, and release management. I work closely with engineering teams and stakeholders to ensure seamless product development.
                            </p>
                            <p>
                                With a foundation in computer science and cybersecurity, I bridge the gap between business and engineering to ensure fast execution and high-quality delivery.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {highlights.map((item, index) => (
                            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors shadow-sm" key={index}>
                                <div className="mb-4 text-primary bg-primary/10 w-fit p-3 rounded-lg">{item.icon}</div>
                                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
