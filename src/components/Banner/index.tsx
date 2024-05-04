import "./styles.css";
import Image from "next/image";
import Link from "next/link";
const Banner = (props: any) => {
  return (
    <div className="div-banner">
      <div className={props.class}>
        <Link href={props.link}>
          <Image
            className="img-banner"
            src={props.src}
            width={1240}
            height={100}
            alt="logo"
          />
        </Link>
        <div className="content-banner">
          <h1 className="title">{props.title}</h1>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
