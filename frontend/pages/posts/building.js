import Link from 'next/link';
import dynamic from "next/dynamic"
import Layout from '../../components/layout';
import styles from '../../components/Map/Map.module.scss';
import Map from '../../components/Map';

const DEFAULT_CENTER = [47.65440627742146, -122.30476957834502]
export default function Building() {   
      return (
        <Layout>
          <h1>
            Building to Building Map
          </h1>
          <Map className={styles.map} width="400" height="200" center={DEFAULT_CENTER} zoom={15}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

        </Layout>
      );
}