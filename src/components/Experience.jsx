import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
    {
        role: 'Technical Product Manager',
        company: 'Sixty One Steps – Zoho Authorised Partner',
        location: 'Chennai, Tamil Nadu',
        period: 'August 2025 – Present',
        description: [
            'Own technical product initiatives across Zoho-based and HR-focused solutions.',
            'Translate business and customer requirements into clear PRDs and implementation plans.',
            'Work closely with engineering teams to manage feature delivery, releases, and quality.',
            'Drive product alignment with customer needs and partner expectations.',
            'Support roadmap execution while ensuring technical feasibility and scalability.'
        ]
    },
    {
        role: 'Associate Product Manager',
        company: 'Klimb.io',
        location: '',
        period: 'September 2022 – July 2025',
        description: [
            'Managed the end-to-end product lifecycle for an HR Tech SaaS platform.',
            'Delivered 50+ features across 40+ releases, coordinating with 5–7 developers.',
            'Collaborated with Customer Success, Sales, Marketing, and Design.',
            'Actively partnered with the CEO to improve product development workflows.',
            'Conducted regular product demos for internal teams to enable sales readiness.',
            'Contributed to product scalability, UI improvements, and process efficiency.'
        ]
    }
];

const Experience = () => {
    return (
        <section className="py-20 bg-background/50" id="experience">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Professional <span className="text-primary">Experience</span>
                </motion.h2>

                <div className="relative border-l border-border ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className="relative pl-8 md:pl-12"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 bg-primary rounded-full border border-background ring-4 ring-background"></div>

                            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                        <h4 className="text-lg text-primary flex items-center gap-2 mt-1">
                                            <Briefcase size={16} /> {exp.company}
                                        </h4>
                                    </div>
                                    <div className="flex flex-col gap-1 text-sm text-muted-foreground mr-auto md:mr-0 md:text-right mt-2 md:mt-0">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                                        {exp.location && <span className="flex items-center gap-1 md:justify-end"><MapPin size={14} /> {exp.location}</span>}
                                    </div>
                                </div>

                                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="leading-relaxed">
                                            <span className="-ml-2">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
