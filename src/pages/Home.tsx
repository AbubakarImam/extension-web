import { BsArrowRight } from "react-icons/bs";
import patternImg from "../assets/images/pattern/grid-pattern.svg";
import Banner1 from "../assets/images/banner/banner1.png";
import Banner2 from "../assets/images/banner/banner2.png";
import Banner3 from "../assets/images/banner/banner3.png";
import VideoRepo from "../assets/images/banner/video-repo.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Works from "../components/Work";
import FeatureIcon1 from "../assets/images/icons/circle-icon.svg"
import FeatureIcon2 from "../assets/images/icons/cursor-icon.svg"
import FeatureIcon3 from "../assets/images/icons/refresh-icon.svg"
import WorkIcon1 from "../assets/images/icons/works_1.svg"
import WorkIcon2 from "../assets/images/icons/works_2.svg"
import WorkIcon3 from "../assets/images/icons/works_3.svg"
function Home() {
    const featuresData = [
        {
            title: "Simple Screen Recording",
            icon: FeatureIcon1,
            description:
                "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
        },
        {
            title: "Easy-to-Share URL",
            icon: FeatureIcon2,
            description:
                "Share your recordings instantly with a single link. No attachments, no downloads.",
        },
        {
            title: "Revisit Recordings",
            icon: FeatureIcon3,
            description:
                "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
        },
    ];

    const howItWorks = [
        {
            img: WorkIcon1,
            title: "Record Screen",
            desc: 'Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.',
        },
        {
            img: WorkIcon2,
            title: "Share Your Recording",
            desc: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
        },
        {
            img: WorkIcon3,
            title: "Learn Effortlessly",
            desc: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
        },
    ];

    return (
        <div className="w-full h-auto bg-white-300">
            <NavBar />
            {/* Hero */}
            <div className="w-full h-full max-h-[700px] bg-white-100 py-[5em] px-[4em] flex items-start justify-between gap-9">
                <div className="left w-full flex flex-col items-start justify-start">
                    <div className="w-full max-w-[390px] flex flex-col items-start justify-start">
                        <h1 className=" text-dark-100 text-[35px] font-ppEB ">
                            Show Them Don’t Just Tell
                        </h1>
                        <h2 className="text-dark-200 text-[13px] font-ppReg">
                            Help your friends and loved ones by creating and sending videos
                            on how to get things done on a website.
                        </h2>
                        <br />
                        <button className="w-full max-w-[150px] rounded-lg px-5 py-4 flex items-center justify-center gap-2 font-ppReg text-white-100 text-[10px] bg-blue-100">
                            Install HelpMeOut <BsArrowRight />
                        </button>
                    </div>
                </div>
                <div className="right w-full h-[300px]">
                    <div className="w-full h-full relative ">
                        <img
                            src={patternImg}
                            className="w-[200px] absolute bottom-[-2em] z-0 left-0"
                        />
                        <img
                            src={patternImg}
                            className="w-[200px] grayscale absolute top-[-2em] z-[0] right-0"
                        />
                        <div className="w-full max-w-[400px] ml-[3em] scale-[.95] h-full max-h-[350px] z-10 gap-4 grid grid-cols-2">
                            <div className="grid grid-rows-2">
                                <img
                                    src={Banner1}
                                    alt="image"
                                    className="w-full"
                                    width={300}
                                    height={0}
                                />
                                <img
                                    src={Banner2}
                                    alt="image"
                                    className="w-full"
                                    width={300}
                                    height={0}
                                />
                            </div>
                            <div className="grid grid-rows-1">
                                <img
                                    src={Banner3}
                                    alt="image"
                                    className="w-full"
                                    width={300}
                                    height={0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Features */}

            <div className="mt-9 w-full h-full max-h-[700px] px-[4em] mb-[5em] bg-white-100">
                <div className="w-full flex flex-col items-center justify-center text-center py-9 pb-7">
                    <h1 className="font-ppB text-[30px]">Features</h1>
                    <p className="font-ppReg text-white-400 text-[12px]">
                        Key Highlights of Our Extension
                    </p>
                </div>
                <br />
                <div className="w-full grid grid-cols-2">
                    <div className="mt-9 flex flex-col gap-7 items-start justify-start">
                        {featuresData.map((d, idx) => (
                            <div
                                key={idx}
                                className="w-full max-w-[400px] flex items-center justify-start gap-4"
                            >
                                <img src={d.icon} className="" width={40} height={40} />
                                <div className="w-full flex flex-col items-start justify-start">
                                    <p className="text-dark-100 font-ppB">{d.title}</p>
                                    <p className="text-white-400 font-ppReg text-[12.2px]">
                                        {d.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <img
                            src={VideoRepo}
                            className="w-full"
                            width={400}
                            height={0}
                        />
                    </div>
                </div>
            </div>

            {/* How it works */}
            <section className="max-w-[1240px] mx-auto lg:py-20">
                <h2
                    className={` font-sora font-bold lg:text-[40px] md:text-4xl text-3xl  text-[#141414] text-center mb-[59px]`}
                >
                    How it works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[83px]">
                    {howItWorks.map((work, i) => (
                        <Works key={i} {...work} />
                    ))}
                </div>
            </section>
            <Footer />
        </div >
    );
}
export default Home