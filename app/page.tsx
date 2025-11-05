import Banner from './components/Banner/index';
import Services from './components/Services/index';
import Aboutus from './components/Aboutus/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Whyus from './components/Whyus/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import ContactOverlay from './components/ContactOverlay/index';


export default function Home() {
  return (
    <main>
      <Digital />
      <Aboutus />
            <Services />
      {/* <Banner /> */}
            <Ourteam />

      <Beliefs />
      <Whyus />

      {/* <Featured />  */}
     {/* <Manage /> */}
      <FAQ />
      <Testimonials />
      <Articles />
      <Joinus />
      <Insta />
      <ContactOverlay />
    </main>
  )
}
