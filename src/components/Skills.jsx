import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Product Management",
        items: ["Product Lifecycle Management", "PRD & User Story Writing", "Roadmapping", "Backlog Grooming", "Agile & Scrum", "Release Management", "Stakeholder Management"]
    },
    {
        category: "Execution & Process",
        items: ["Agile Project Management", "Metrics Tracking", "Process Optimization", "Feature Impact Analysis", "Go-to-Market Support"]
    },
    {
        category: "UX & Research",
        items: ["UI/UX Collaboration", "Wireframing", "Customer User Flows", "User Acceptance Testing", "Feedback Analysis"]
    },
    {
        category: "Technical Stack",
        items: ["MERN Stack", "Python", "AWS", "SQL", "REST APIs", "Git", "PostgreSQL", "Auth0"]
    },
    {
        category: "Product Tools",
        items: ["Jira", "Scrum Boards", "Power BI", "Figma", "Notion", "Linear"]
    },
    {
        category: "Soft Skills",
        items: ["Cross-functional Communication", "Problem Solving", "Strategic Thinking", "Ownership", "Documentation"]
    }
];

const Skills = () => {
    return (
        <section className="py-20 bg-background" id="skills">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Core <span className="text-primary">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            className="bg-card border border-border p-6 rounded-xl hover:shadow-md transition-shadow"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-foreground border-b border-border pb-3">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, i) => (
                                    <span
                                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border hover:border-primary/50 cursor-default transition-colors"
                                        key={i}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
