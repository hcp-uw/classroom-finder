import Link from 'next/link';
import Image from 'next/image';

export default function Info() {

  return (
    <>
    <Link href="/">
    <Image
        src="/images/back.jpg" // Route of the image file
        height={100} // Desired size with correct aspect ratio
        width={100} // Desired size with correct aspect ratio
        alt="Info"

    />
    </Link>
    <Image
        src="/images/info.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Info"
    />
      <h1>About Classroom Finder</h1>
        <p> We are ClassroomFinder, an app that provides directions to classrooms at UW.
            To get directions from one UW building to another, you can type your start
            and destination buildings in the 2 search bars. To get directions from a UW
            building entrance to a specific room, you can type the building name in the first
            search bar and the room number in the second.</p>
      <h2>
      </h2>
    </>
  );
}