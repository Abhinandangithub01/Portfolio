import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Bot, Layout, Gamepad, PenTool, Home, Heart, Gavel, TrendingUp, Cpu, ExternalLink, Brain, Globe, Image, FileText, LayoutDashboard } from 'lucide-react';

const allProjects = [
    {
        title: "Neural Learn",
        subtitle: "Neural Learn transforms how people consume and retain knowledge using AI to summarize news and content into digestible segments. It leverages Google Gemini and ElevenLabs to create an immersive, multi-modal learning experience.",
        tech: "Gemini AI, MERN",
        link: "https://devpost.com/software/neural-learn",
        icon: <Brain size={28} />
    },
    {
        title: "GR Command Center",
        subtitle: "An AI-powered race engineering dashboard with real-time widgets and predictive analytics built for Toyota GR Cup Series teams. It provides critical insights to optimize race strategy and performance.",
        tech: "React, TypeScript",
        link: "https://devpost.com/software/gr-command-center",
        icon: <LayoutDashboard size={28} />
    },
    {
        title: "AtlasGo",
        subtitle: "A seamless travel discovery platform using Algolia search and Storyblok CMS to find amazing places. Plan personalized trips and discover hidden gems nearby with AI-driven recommendations.",
        tech: "Next.js, Algolia",
        link: "https://devpost.com/software/atlasgo",
        icon: <Globe size={28} />
    },
    {
        title: "FluxFlow Studio",
        subtitle: "An AI platform that transforms everyday photos into professional e-commerce images using Hugging Face FLUX. It automatically generates targeted marketing campaigns to boost engagement.",
        tech: "Python, Flask",
        link: "https://devpost.com/software/fluxflow-studio",
        icon: <Image size={28} />
    },
    {
        title: "Job Craft AI",
        subtitle: "An intelligent document automation platform that creates personalized, ATS-optimized job application packages in minutes. It simplifies the job hunt by generating tailored resumes and cover letters.",
        tech: "React, Node.js",
        link: "https://devpost.com/software/job-craft-ai",
        icon: <FileText size={28} />
    },
    {
        title: "Fortify",
        subtitle: "An AI-powered security analysis agent that proactively scans codebases for vulnerabilities. It provides detailed remediation steps and security insights using advanced LLMs to ensure code integrity.",
        tech: "Postgres, AI",
        link: "https://dev.to/abhinandan-r/fortify-ai-powered-security-analysis-platform-54i8",
        icon: <Shield size={28} />
    },
    {
        title: "AgentFlow",
        subtitle: "A robust framework for deploying autonomous AI agents capable of executing complex workflows. It features secure OAuth integration for enterprise-grade automation and data safety.",
        tech: "Auth0, AI",
        link: "https://dev.to/abhinandan-r/agentflow-autonomous-ai-agents-with-secure-oauth-integration-via-auth0-token-vault-4hfp",
        icon: <Bot size={28} />
    },
    {
        title: "MarketSentry",
        subtitle: "A professional financial dashboard providing real-time market insights and portfolio tracking. Built with KendoReact, it offers deep analytics and predictive modeling for investors.",
        tech: "KendoReact, Finance",
        link: "https://dev.to/abhinandan-r/marketsentry-professional-financial-dashboard-with-kendoreact-components-pgm",
        icon: <TrendingUp size={28} />
    },
    {
        title: "AuctionVault",
        subtitle: "A privacy-first bidding platform leveraging Zero-Knowledge proofs. It ensures bid confidentiality while maintaining transparency and trust on the blockchain for high-stakes auctions.",
        tech: "Blockchain, ZK",
        link: "https://dev.to/abhinandan-r/auctionvault-protecting-bidder-privacy-with-midnights-zero-knowledge-proofs-30c8",
        icon: <Gavel size={28} />
    },
    {
        title: "TechPulse AI",
        subtitle: "An automated tech news aggregator that curates and summarizes trending topics from LinkedIn. Powered by n8n workflows and Bright Data, it keeps tech professionals ahead of the curve.",
        tech: "n8n, Bright Data",
        link: "https://dev.to/abhinandan-r/techpulse-ai-automated-linkedin-tech-news-agent-powered-by-n8n-bright-data-37p0",
        icon: <Cpu size={28} />
    }
];

const Projects = () => {
    return (
        <section className="py-20 bg-background" id="projects">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A collection of technical products, AI experiments, and case studies.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProjects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-card border border-border rounded-xl p-6 group hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden block"
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-secondary/50 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                                    {project.icon}
                                </div>
                                <ExternalLink size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>

                            <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.subtitle}</p>

                            <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground border border-border">
                                {project.tech}
                            </div>

                            {/* Subtle hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
