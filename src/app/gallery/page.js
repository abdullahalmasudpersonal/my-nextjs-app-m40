import Image from "next/image";
//import nextImage from "../../assets/nextjs.png";
import nextImage from "@/assets/nextjs.png";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image optimizations</h1>
      <h2 className="text-center text-2xl">Regular Image</h2>
      <img
        className="mx-auto mb-5"
        width={500}
        height={400}
        src='https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next-img'
        alt="next-img"
      />

      <h2 className="text-center text-2xl">Next js image Components</h2>
      <Image
        className="text-center text-4xl mx-auto"
        width={500}
        height={400}
        src='https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next-img'
        alt=""
      />
      <h2 className="text-center text-2xl"> Local image Components</h2>
      <Image
        className="text-center text-4xl mx-auto"
        width={500}
        height={400}
        src={nextImage}
        alt=""
      />
    </div>
  );
};

export default GalleryPage;
