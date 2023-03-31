import Link from 'next/link';
import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons'
import Layout from '../../components/layout';

export default function Info() {

  // **TODO** Add logo, colors, move styles to css sheet
  // https://nextjs.org/learn/basics/assets-metadata-css/layout-component

  return (
    <Layout>
    <main>
      <Link href="/">
        <ArrowBackIcon boxSize={100}/>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
      <InfoIcon boxSize={100} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
      <h1>About Classroom Finder</h1>
      </div>

      <center>
      <p>
        We are ClassroomFinder, an app that provides directions to classrooms at UW.<br></br>
        To get directions from one UW building to another, you can type your start<br></br>
        and destination buildings in the 2 search bars. To get directions from a UW<br></br>
        building entrance to a specific room, you can type the building name in the first<br></br>
        search bar and the room number in the second.
      </p>
      </center>
    </main>
    </Layout>
  );
}