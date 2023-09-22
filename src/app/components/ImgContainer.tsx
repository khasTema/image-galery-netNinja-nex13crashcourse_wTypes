import Image from "next/image"
import { Photo } from "@/models/Images"
import Link from "next/link"

type Props = {
    photo: Photo
}

export default function ImgContainer({photo}: Props) {

  const widthHightRatio = photo.height / photo.width
  const galleryHeight = Math.ceil(250 * widthHightRatio)
  const photoSpans = Math.ceil(galleryHeight / 10) + 1

  return (
    <div key={photo.id} className="w-[250px] justify-self-center" style={{gridRow: `span ${photoSpans}`}}>
      <Link href={photo.url} target="_blank" className="grid place-content-center">
        <div className="rounded-xl overflow-hidden group">
          <Image  
              src={photo.src.large}
              alt={photo.alt}
              width={250}
              height={galleryHeight}
              className="group-hover:opacity-75"
              sizes="250px"
              placeholder="blur"
              blurDataURL={photo.blurredDataUrl}
          />
        </div>
      </Link>
    </div>
  )
}
