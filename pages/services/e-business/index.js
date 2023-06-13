import React from "react";
import { LayoutSubPages } from "../../../components";
import Meta from "../../../components/defaults/Meta";
import { useRouter } from "next/router";
import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/outline";
import Link from "next/link";

const features = [
    {
        name: "Shared Vision",
        description: "We believe that sharing the same vision as our clients is key to the success of the outcome. Reaching the desired destination of our customers in the most cost-beneficial way is our goal for you.",
        href: "#",
        icon: InboxIcon,
    },
    {
        name: "Transparency",
        description: "Transparency is one of the primary values of Bitzquad, and we respect your right to know. We approach the projects in a transparent way where you can see through the project. ",
        href: "#",
        icon: UsersIcon,
    },
    {
        name: "Cross Collaboration",
        description: "Our approach spans different expert teams of Bitzquad to ensure the project gets the best inputs and technologies available.",
        href: "#",
        icon: TrashIcon,
    },
    {
        name: "Agility",
        description: "A setback? Still, we got it. Bitzquad's solution-oriented, fast-moving practices within teams are a strength which keeps us ahead in finding the most suitable alternative for the setback.",
        href: "#",
        icon: TrashIcon,
    },
];

const Index = () => {
    const router = useRouter();
    return (
        <>
            <LayoutSubPages>
                <Meta title="Bitzquad | E-Business" description="Bitzquad provides bespoke E-Business models covering all your functions to achieve an optimal output. Save time and energy and invest in better growth with Bitzquad. Our competent team is ready to take you through an unmatchable journey." />
                <div className="bz-container relative mx-auto mt-0 h-full w-full bg-transparent lg:mt-44">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">E-Business</h1>
                            <p className="mt-6 text-lg italic leading-8 text-gray-600">&quot;E-Business utilizes digital information and advanced communication technologies to streamline different business processes. It is an integration of the whole business over a computer mediated network. It replaces many manual systems and automates interconnected operations. &quot;</p>
                        </div>
                        <div className="mx-auto">
                            <p className="mt-6 text-lg leading-8 text-gray-600">Are you a futuristic organization which strives to achieve optimal efficiency in your business functions? The E-Business model is the best solution for you.</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Bitzquad provides bespoke E-Business models covering all your functions to achieve an optimal output. Save time and energy and invest in better growth with Bitzquad. Our competent team is ready to take you through an unmatchable journey.</p>
                        </div>
                        {/* <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-10 lg:max-w-none">
                            <h2 className="pb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:pb-8">Your IS Journey with Us</h2>
                            <img src="/services-exp.webp" alt="App screenshot" className="mx-auto rounded-xl ring-1 ring-white/10 lg:max-w-3xl" width={2432} height={1442} />
                        </div> */}
                        <div className="mx-auto mt-8  max-w-2xl sm:mt-20 lg:mt-10 lg:max-w-none">
                            <h2 className="pb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl  lg:pb-8">Our Approach</h2>
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2">
                                {features.map((feature) => (
                                    <div key={feature.name} className="flex flex-col rounded-xl bg-white p-5 shadow-2xl duration-200 ease-in hover:scale-105 ">
                                        <dt className="text-lg font-semibold leading-7 text-gray-900">
                                            {/* <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div> */}
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                            <p className="flex-auto">{feature.description}</p>
                                            {/* <p className="mt-6">
                                                <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                                                    Learn more <span aria-hidden="true">→</span>
                                                </a>
                                            </p> */}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="mx-auto mb-16 mt-8 max-w-2xl overflow-hidden sm:mt-20 lg:mt-10 lg:max-w-none">
                            <h2 className="pb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:pb-8">Our Tech Stack</h2>
                            <div className="marquee mx-auto flex max-w-lg items-center  gap-x-16 gap-y-10  sm:max-w-xl lg:mx-0 lg:max-w-none">
                                {/* Start */}
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/nextjs.png" alt="NextJS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/vercel.png" alt="Vercel" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/html.png" alt="HTML" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/css.png" alt="CSS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/js.png" alt="JS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/tailwind.png" alt="Tailwind" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/figma.png" alt="Figma" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/aws.png" alt="AWS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/mongodb.png" alt="MongoDB" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/nodejs.png" alt="NodeJS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/react.png" alt="React" width={200} height={113} />
                                {/* End */}
                                {/* Start */}
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/nextjs.png" alt="NextJS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/vercel.png" alt="Vercel" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/html.png" alt="HTML" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/css.png" alt="CSS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/js.png" alt="JS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/tailwind.png" alt="Tailwind" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/figma.png" alt="Figma" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/aws.png" alt="AWS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/mongodb.png" alt="MongoDB" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/nodejs.png" alt="NodeJS" width={200} height={113} />
                                <img className=" max-h-20 w-full object-contain " src="/assets/img/techstack/react.png" alt="React" width={200} height={113} />
                                {/* End */}
                            </div>
                        </div>

                        <div className="mx-auto mb-16 mt-8 max-w-2xl sm:mt-20 lg:mt-10 lg:max-w-none">
                            <h4 className=" text-xl font-bold tracking-tight text-gray-900 ">Thinking about streamlining your business processes?</h4>
                            <p className=" text-lg leading-8 text-gray-600">
                                <Link href="/contact">
                                    <span className="font-bold italic underline hover:cursor-pointer">Contact us</span>
                                </Link>{" "}
                                to know more!
                            </p>
                        </div>
                    </div>
                </div>
            </LayoutSubPages>
        </>
    );
};

export default Index;
