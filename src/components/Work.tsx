import workPlaceHolder from "../assets/images/banner/work_placeholder.png";

interface WorksProps {
  img: string;
  title: string;
  desc: string;
}

const Works = ({ img, title, desc }: WorksProps) => {
  return (
    <article className="flex-col flex justify-center items-center scale-[.70] ">
      <img
        src={img}
        width={50}
        height={0}
        alt="How it works"
        className="mb-8"
      />
      <h3
        className={` font-inter font-semibold text-center mb-4 lg:text-[28px] text-xl text-[#1B233D]`}
      >
        {title}
      </h3>
      <p
        className={` font-workSans max-w-[358px] mb-7 text-center leading-primary font-normal lg:text-xl text-base`}
      >
        {desc}
      </p>
      <img src={workPlaceHolder} width={0} height={0} alt="Placeholder" />
    </article>
  );
};

export default Works;
