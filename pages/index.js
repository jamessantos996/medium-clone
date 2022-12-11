import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faStar } from "@fortawesome/free-solid-svg-icons";

import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
    return (
        <>
            <header className="bg-primary py-6 px-6 border-b border-black">
                <div className="container flex items-center justify-between">
                    <img className="h-10" src="./medium-logo.png" alt="logo" />
                    <ul className="flex items-center gap-5">
                        <li className="hidden text-sm md:block">
                            <a href="#">Our Story</a>
                        </li>
                        <li className="hidden text-sm md:block">
                            <a href="#">Membership</a>
                        </li>
                        <li className="hidden text-sm md:block">
                            <a href="#">Write</a>
                        </li>
                        <li className="hidden text-sm md:block">
                            <a href="#">Sign In</a>
                        </li>
                        <li className="w-full rounded-3xl bg-black py-2 px-4 text-sm md:w-auto">
                            <a className="  text-white" href="#">
                                Get Started
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <section className="bg-primary py-24">
                <div className="container px-6 flex flex-col">
                    <h2 className="text-[70px] leading-none mb-9 lg:text-[106px]">
                        Stay curious.
                    </h2>
                    <h3 className="text-2xl mb-12">
                        Discover stories, thinking, and expertise from writers
                        on any topic.
                    </h3>
                    <a
                        className="block py-2 px-5 rounded-3xl bg-black text-white w-52 text-center text-xl"
                        href="#"
                    >
                        Start reading
                    </a>
                </div>
            </section>
            <section className="border-b-2 border-slate-200">
                <div className="container py-10 px-6 flex flex-col gap-4">
                    <div className="flex gap-3">
                        <FontAwesomeIcon icon={faArrowTrendUp} />
                        <p className="text-xs text-[#292929] uppercase font-bold">
                            trending on medium
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl text-[#e6e6e6] font-bold">
                                01
                            </span>
                            <div className="flex flex-col gap-2">
                                <a className="flex items-center" href="#">
                                    <img
                                        className="h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        James Santos
                                    </h4>
                                </a>
                                <a href="">
                                    <h2 className="text-base font-bold">
                                        malesuada bibendum arcu vitae elementum
                                        curabitur vitae nunc sed velit
                                    </h2>
                                </a>
                                <div className="flex gap-2 items-center text-xs text-[#757575]">
                                    <span>Dec 12</span>
                                    <span>·</span>
                                    <span>3min read</span>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color="yellow"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-3xl text-[#e6e6e6] font-bold">
                                02
                            </span>
                            <div className="flex flex-col gap-2">
                                <a className="flex items-center" href="#">
                                    <img
                                        className="h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        James Santos
                                    </h4>
                                </a>
                                <a href="">
                                    <h2 className="text-base font-bold">
                                        malesuada bibendum arcu vitae elementum
                                        curabitur vitae nunc sed velit
                                    </h2>
                                </a>
                                <div className="flex gap-2 items-center text-xs text-[#757575]">
                                    <span>Dec 12</span>
                                    <span>·</span>
                                    <span>3min read</span>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color="yellow"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-3xl text-[#e6e6e6] font-bold">
                                03
                            </span>
                            <div className="flex flex-col gap-2">
                                <a className="flex items-center" href="#">
                                    <img
                                        className="h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        James Santos
                                    </h4>
                                </a>
                                <a href="">
                                    <h2 className="text-base font-bold">
                                        malesuada bibendum arcu vitae elementum
                                        curabitur vitae nunc sed velit
                                    </h2>
                                </a>
                                <div className="flex gap-2 items-center text-xs text-[#757575]">
                                    <span>Dec 12</span>
                                    <span>·</span>
                                    <span>3min read</span>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color="yellow"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-3xl text-[#e6e6e6] font-bold">
                                04
                            </span>
                            <div className="flex flex-col gap-2">
                                <a className="flex items-center" href="#">
                                    <img
                                        className="h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        James Santos
                                    </h4>
                                </a>
                                <a href="">
                                    <h2 className="text-base font-bold">
                                        malesuada bibendum arcu vitae elementum
                                        curabitur vitae nunc sed velit
                                    </h2>
                                </a>
                                <div className="flex gap-2 items-center text-xs text-[#757575]">
                                    <span>Dec 12</span>
                                    <span>·</span>
                                    <span>3min read</span>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color="yellow"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-3xl text-[#e6e6e6] font-bold">
                                05
                            </span>
                            <div className="flex flex-col gap-2">
                                <a className="flex items-center" href="#">
                                    <img
                                        className="h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        James Santos
                                    </h4>
                                </a>
                                <a href="">
                                    <h2 className="text-base font-bold">
                                        malesuada bibendum arcu vitae elementum
                                        curabitur vitae nunc sed velit
                                    </h2>
                                </a>
                                <div className="flex gap-2 items-center text-xs text-[#757575]">
                                    <span>Dec 12</span>
                                    <span>·</span>
                                    <span>3min read</span>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color="yellow"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-3xl text-[#e6e6e6] font-bold">
                                06
                            </span>
                            <div className="flex flex-col gap-2">
                                <a className="flex items-center" href="#">
                                    <img
                                        className="h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        James Santos
                                    </h4>
                                </a>
                                <a href="">
                                    <h2 className="text-base font-bold">
                                        malesuada bibendum arcu vitae elementum
                                        curabitur vitae nunc sed velit
                                    </h2>
                                </a>
                                <div className="flex gap-2 items-center text-xs text-[#757575]">
                                    <span>Dec 12</span>
                                    <span>·</span>
                                    <span>3min read</span>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color="yellow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container flex flex-col-reverse lg:flex-row">
                    <div className="flex flex-col gap-8 py-10 px-6">
                        <div className="flex gap-5 justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex gap-2 items-center">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        Thomas Smith
                                    </h4>
                                </a>
                                <a href="#">
                                    <h2 className="text-base font-bold leading-5 md:text-2xl">
                                        ChatGPT is Having a Thomas Edison Moment
                                    </h2>
                                    <h3 className="hidden md:block md:text-base md:text-[#757575]">
                                        Why breakthrough technologies need to be
                                        accessible
                                    </h3>
                                </a>
                                <div className="flex justify-between gap-1 items-center">
                                    <div className="flex gap-2 items-center text-xs text-[#757575]">
                                        <span>Dec 12</span>
                                        <span>·</span>
                                        <span>3min read</span>
                                        <a
                                            className="hidden sm:inline-block sm:rounded-md sm:py-[2px] sm:px-2 sm:bg-[#f2f2f2]"
                                            href="#"
                                        >
                                            Gpt 3
                                        </a>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            color="yellow"
                                        />
                                    </div>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <img
                                className="object-cover w-24 h-24 md:w-52 md:h-32"
                                src="./sample-img.png"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-5 justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex gap-2 items-center">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        Thomas Smith
                                    </h4>
                                </a>
                                <a href="#">
                                    <h2 className="text-base font-bold leading-5 md:text-2xl">
                                        ChatGPT is Having a Thomas Edison Moment
                                    </h2>
                                    <h3 className="hidden md:block md:text-base md:text-[#757575]">
                                        Why breakthrough technologies need to be
                                        accessible
                                    </h3>
                                </a>
                                <div className="flex justify-between gap-1 items-center">
                                    <div className="flex gap-2 items-center text-xs text-[#757575]">
                                        <span>Dec 12</span>
                                        <span>·</span>
                                        <span>3min read</span>
                                        <a
                                            className="hidden sm:inline-block sm:rounded-md sm:py-[2px] sm:px-2 sm:bg-[#f2f2f2]"
                                            href="#"
                                        >
                                            Gpt 3
                                        </a>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            color="yellow"
                                        />
                                    </div>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <img
                                className="object-cover w-24 h-24 md:w-52 md:h-32"
                                src="./sample-img.png"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-5 justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex gap-2 items-center">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        Thomas Smith
                                    </h4>
                                </a>
                                <a href="#">
                                    <h2 className="text-base font-bold leading-5 md:text-2xl">
                                        ChatGPT is Having a Thomas Edison Moment
                                    </h2>
                                    <h3 className="hidden md:block md:text-base md:text-[#757575]">
                                        Why breakthrough technologies need to be
                                        accessible
                                    </h3>
                                </a>
                                <div className="flex justify-between gap-1 items-center">
                                    <div className="flex gap-2 items-center text-xs text-[#757575]">
                                        <span>Dec 12</span>
                                        <span>·</span>
                                        <span>3min read</span>
                                        <a
                                            className="hidden sm:inline-block sm:rounded-md sm:py-[2px] sm:px-2 sm:bg-[#f2f2f2]"
                                            href="#"
                                        >
                                            Gpt 3
                                        </a>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            color="yellow"
                                        />
                                    </div>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <img
                                className="object-cover w-24 h-24 md:w-52 md:h-32"
                                src="./sample-img.png"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-5 justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex gap-2 items-center">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        Thomas Smith
                                    </h4>
                                </a>
                                <a href="#">
                                    <h2 className="text-base font-bold leading-5 md:text-2xl">
                                        ChatGPT is Having a Thomas Edison Moment
                                    </h2>
                                    <h3 className="hidden md:block md:text-base md:text-[#757575]">
                                        Why breakthrough technologies need to be
                                        accessible
                                    </h3>
                                </a>
                                <div className="flex justify-between gap-1 items-center">
                                    <div className="flex gap-2 items-center text-xs text-[#757575]">
                                        <span>Dec 12</span>
                                        <span>·</span>
                                        <span>3min read</span>
                                        <a
                                            className="hidden sm:inline-block sm:rounded-md sm:py-[2px] sm:px-2 sm:bg-[#f2f2f2]"
                                            href="#"
                                        >
                                            Gpt 3
                                        </a>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            color="yellow"
                                        />
                                    </div>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <img
                                className="object-cover w-24 h-24 md:w-52 md:h-32"
                                src="./sample-img.png"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-5 justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex gap-2 items-center">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        Thomas Smith
                                    </h4>
                                </a>
                                <a href="#">
                                    <h2 className="text-base font-bold leading-5 md:text-2xl">
                                        ChatGPT is Having a Thomas Edison Moment
                                    </h2>
                                    <h3 className="hidden md:block md:text-base md:text-[#757575]">
                                        Why breakthrough technologies need to be
                                        accessible
                                    </h3>
                                </a>
                                <div className="flex justify-between gap-1 items-center">
                                    <div className="flex gap-2 items-center text-xs text-[#757575]">
                                        <span>Dec 12</span>
                                        <span>·</span>
                                        <span>3min read</span>
                                        <a
                                            className="hidden sm:inline-block sm:rounded-md sm:py-[2px] sm:px-2 sm:bg-[#f2f2f2]"
                                            href="#"
                                        >
                                            Gpt 3
                                        </a>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            color="yellow"
                                        />
                                    </div>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <img
                                className="object-cover w-24 h-24 md:w-52 md:h-32"
                                src="./sample-img.png"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-5 justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex gap-2 items-center">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        Thomas Smith
                                    </h4>
                                </a>
                                <a href="#">
                                    <h2 className="text-base font-bold leading-5 md:text-2xl">
                                        ChatGPT is Having a Thomas Edison Moment
                                    </h2>
                                    <h3 className="hidden md:block md:text-base md:text-[#757575]">
                                        Why breakthrough technologies need to be
                                        accessible
                                    </h3>
                                </a>
                                <div className="flex justify-between gap-1 items-center">
                                    <div className="flex gap-2 items-center text-xs text-[#757575]">
                                        <span>Dec 12</span>
                                        <span>·</span>
                                        <span>3min read</span>
                                        <a
                                            className="hidden sm:inline-block sm:rounded-md sm:py-[2px] sm:px-2 sm:bg-[#f2f2f2]"
                                            href="#"
                                        >
                                            Gpt 3
                                        </a>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            color="yellow"
                                        />
                                    </div>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <img
                                className="object-cover w-24 h-24 md:w-52 md:h-32"
                                src="./sample-img.png"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-5 justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex gap-2 items-center">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src="./user.jpg"
                                        alt="author"
                                    />
                                    <h4 className="text-xs font-medium">
                                        Thomas Smith
                                    </h4>
                                </a>
                                <a href="#">
                                    <h2 className="text-base font-bold leading-5 md:text-2xl">
                                        ChatGPT is Having a Thomas Edison Moment
                                    </h2>
                                    <h3 className="hidden md:block md:text-base md:text-[#757575]">
                                        Why breakthrough technologies need to be
                                        accessible
                                    </h3>
                                </a>
                                <div className="flex justify-between gap-1 items-center">
                                    <div className="flex gap-2 items-center text-xs text-[#757575]">
                                        <span>Dec 12</span>
                                        <span>·</span>
                                        <span>3min read</span>
                                        <a
                                            className="hidden sm:inline-block sm:rounded-md sm:py-[2px] sm:px-2 sm:bg-[#f2f2f2]"
                                            href="#"
                                        >
                                            Gpt 3
                                        </a>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            color="yellow"
                                        />
                                    </div>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <img
                                className="object-cover w-24 h-24 md:w-52 md:h-32"
                                src="./sample-img.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <aside className="p-6 border-b-2 border-slate-200 lg:flex-1">
                        <p className="text-xs font-bold uppercase mb-4">
                            discover more of what matters to you
                        </p>
                        <div className="flex flex-wrap gap-2 lg:pb-6 lg:border-b-2 lg:border-slate-200">
                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                programming
                            </a>

                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                data science
                            </a>
                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                technology
                            </a>
                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                self improvement
                            </a>
                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                writing
                            </a>
                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                relationships
                            </a>
                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                machine learning
                            </a>
                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                productivity
                            </a>
                            <a
                                className="block px-4 py-2 text-xs border-2 border-gray-300 capitalize"
                                href=""
                            >
                                politics
                            </a>
                        </div>
                        <div className="hidden lg:flex lg:flex-wrap lg:gap-x-6 lg:gap-y-2 lg:text-sm lg:py-6">
                            <a href="#" className="text-sm text-[#757575]">
                                Help
                            </a>
                            <a href="#" className="text-sm text-[#757575]">
                                Status
                            </a>
                            <a href="#" className="text-sm text-[#757575]">
                                Writers
                            </a>
                            <a href="#" className="text-sm text-[#757575]">
                                Blog
                            </a>
                            <a href="#" className="text-sm text-[#757575]">
                                Careers
                            </a>
                            <a href="#" className="text-sm text-[#757575]">
                                Privacy
                            </a>
                            <a href="#" className="text-sm text-[#757575]">
                                Terms
                            </a>
                            <a href="#" className="text-sm text-[#757575]">
                                About
                            </a>
                            <a href="#" className="text-sm text-[#757575]">
                                Text to speech
                            </a>
                        </div>
                    </aside>
                </div>
            </section>
            <footer className="p-6 bg-black lg:hidden">
                <div>
                    <img
                        className="h-10"
                        src="./medium-logo-white.png"
                        alt="logo"
                    />
                    <div className="flex gap-5 text-white text-xs py-5 border-b-2 border-gray-400 md:border-none">
                        <a href="#">About</a>
                        <a href="#">Help</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                    </div>
                    <div className="py-5 md:hidden">
                        <h2 className="text-base text-white mb-5">
                            Get the Medium App
                        </h2>
                        <div className="flex gap-4">
                            <a
                                className="inline-block bg-apple w-32 h-10 bg-contain bg-no-repeat"
                                href="#"
                            ></a>
                            <a
                                className="inline-block bg-google w-32 h-10 bg-contain bg-no-repeat"
                                href="#"
                            ></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
