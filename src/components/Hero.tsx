import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas"
import { Shapes, ArrowRight, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    useEffect(() => {
        renderCanvas();
    }, []);

    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden">
            <div className="animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20 z-10 relative">
                <div className="mb-10 mt-4 md:mt-6 w-full max-w-5xl">
                    <div className="px-2 w-full">
                        <div className="relative mx-auto h-full max-w-7xl border border-muted p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20 bg-background/50 backdrop-blur-sm rounded-3xl">
                            <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-tight tracking-tight md:text-7xl lg:text-8xl">
                                <Plus
                                    strokeWidth={4}
                                    className="text-muted-foreground absolute -left-5 -top-5 h-8 w-8 md:h-10 md:w-10"
                                />
                                <Plus
                                    strokeWidth={4}
                                    className="text-muted-foreground absolute -bottom-5 -left-5 h-8 w-8 md:h-10 md:w-10"
                                />
                                <Plus
                                    strokeWidth={4}
                                    className="text-muted-foreground absolute -right-5 -top-5 h-8 w-8 md:h-10 md:w-10"
                                />
                                <Plus
                                    strokeWidth={4}
                                    className="text-muted-foreground absolute -bottom-5 -right-5 h-8 w-8 md:h-10 md:w-10"
                                />
                                Abhinandan R <br />
                                <span className="text-muted-foreground text-2xl md:text-5xl mt-2 block">Technical Product Manager / Developer</span>
                            </h1>
                            <div className="flex items-center justify-center gap-2 mt-8">
                                <span className="relative flex h-3 w-3 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                <p className="text-sm font-medium text-green-500">Ready to build</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="mt-8 text-2xl md:text-3xl font-medium">
                        Welcome to my digital garden!
                    </h2>

                    <p className="md:text-lg mx-auto mb-10 mt-4 max-w-2xl px-6 text-muted-foreground">
                        I blend technical expertise with product strategy to architect and develop scalable SaaS platforms, driving innovation from code to launch.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a href="#projects">
                            <Button variant="default" size="lg" className="rounded-full">
                                View Work
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/abhi-nandan-r" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="rounded-full">
                                LinkedIn
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <canvas
                className="bg-background pointer-events-none absolute inset-0 mx-auto opacity-40"
                id="canvas"
            ></canvas>
        </section>
    );
};
