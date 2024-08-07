import TextDecodeAnimation from "../../components/DecodeText";
import Header from "../../components/Header";
import Nav from "../../components/Navbar";

export default function Resume() {
    return <div className="max-w-7xl mx-auto">
        <div className="min-h-screen flex">
            <Nav></Nav>
            <main className="grow overflow-hidden px-6 mb-10 pb-10">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col relative">
                    <Header></Header>
                    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 md:pt-16 pb-16 md:pb-20">
                        <div className="grow">
                            <div className="max-w-[1072px]">
                                <section>
                                    <TextDecodeAnimation time={100} hindiText="मेरे बारे में!" englishText="About me!" style="h1 mb-5 text-4xl md:font-bold text-center md:text-left" />
                                    <div className="flex flex-col md:flex-row ">
                                        <div className="order-2 md:order-1 md:w-1/2 items-start">
                                            <p className="text-xl mt-4 md:text-left ">A passionate Software Developer with a keen eye for design and a dedication to creating engaging, accessible, and user-centric experiences. With a strong foundation in front-end development, I specialize in technologies like React.js, TypeScript, and Tailwind CSS to build scalable, efficient, and visually appealing applications.</p>
                                        </div>
                                        <img
                                            src="../../styles/About_img.jpg"
                                            alt="about_img"
                                            loading="lazy"
                                            decoding="async"
                                            className="order-1 md:order-2 md:-mt-14 max-w-full h-96 mx-auto block bg-transparent "
                                            srcSet="About_img.jpg 1x, About_img.jpg 2x"
                                        />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
}
