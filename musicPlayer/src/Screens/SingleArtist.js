import { useParams } from "react-router-dom"
import ArtistInfo from "../Components/Single/ArtistInfo"
import { Data } from "../Data/ArtistsData"
import Layout from "../Layout/Layout"

function SingleArtist() {
    const {id} = useParams()
    const artist = Data.find((artist) => artist.name === id)
    return (
      <Layout>
          <ArtistInfo artist={artist} />
          <p>khkjfhdjkgfdg</p>
      </Layout>
    )
  }
  
  export default SingleArtist