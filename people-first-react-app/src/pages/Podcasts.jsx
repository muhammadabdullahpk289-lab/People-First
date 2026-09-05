import PodcastAnalytics from "../Sections/Podcast/Podcastanalytics"
import PodcastBanner from "../Sections/Podcast/Podcastbanner"
import PodcastHero from "../Sections/Podcast/Podcasthero"
import GetinTouch from '../Sections/Podcast/GetInTouch'
import OurPodcasts from "../Sections/Podcast/Ourpodcasts"


function Podcasts() {
  return (
    <>
     <PodcastHero />  
     <PodcastBanner />  
     <PodcastAnalytics />
     <OurPodcasts />
     <GetinTouch />
    </>
  )
}
export default Podcasts