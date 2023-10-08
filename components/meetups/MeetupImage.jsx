import { useState } from "react";
import Image from "next/image";

const MeetupImage = ({ image, title, className }) => {
  const [src, setSrc] = useState(image);

  return (
    <Image
      onError={() =>
        setSrc(
          "https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png"
        )
      }
      width={0}
      height={0}
      sizes="100vw"
      src={src}
      alt={title}
      className={className}
    />
  );
};

export default MeetupImage;
