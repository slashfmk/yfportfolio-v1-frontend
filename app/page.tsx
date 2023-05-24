import Image from 'next/image'
import Header from './components/Header'
import Section from './components/Section'
import { Suspense } from 'react';
import GitCard from './components/GitCard';

import { FaDeskpro, FaDesktop, FaEye, FaFirefoxBrowser, FaGlobeAfrica, FaLaptop, FaMobile, FaPhone, FaPhoneSquare } from "react-icons/fa";
import Card from './components/Card';
import Service from './components/Service';
import Footer from './components/Footer';


async function getData() {

  const res = await fetch('https://api.github.com/users/slashfmk/repos?per_page=100');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// Mockup data
const thingsBuilt = [

  {
    id: 1,
    title: "Cinema",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "www.google.com",
    detail: "Some details",
    technology: "ReactJs, Springboot, Tailwinds"
  },
  {
    id: 2,
    title: "Cool stuff",
    image: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "#",
    detail: "Some details",
    technology: "ReactJs, Springboot, Tailwinds"
  },
  {
    id: 3,
    title: "Crazy ass",
    image: "https://images.pexels.com/photos/2142424/pexels-photo-2142424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "www.snipper.com",
    detail: "Some details",
    technology: "ReactJs, Springboot, Tailwinds"
  },
  {
    id: 4,
    title: "Women Webapp",
    image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg",
    url: "#",
    detail: "Some details",
    technology: "ReactJs, Springboot, Tailwinds"
  },

]


export default async function Home() {

  const reposData = await getData();


  return (

    <>

      <Header />

      <Section
        title={'Things I build'}
        description={`I build things that make people's lives easier`}>
        
        <div className={`flex flex-row justify-between gap-6 flex-wrap`}>

          {/* What we build */}
          <Service title={'Web App'} icon={<FaFirefoxBrowser size={100} />} >
            I create web based app for frontend and backend with a variety of tech stacks.
          </Service>

          <Service title={'Mobile App'} icon={<FaMobile size={100} />} >
            I create native Mobile based app that run on both Android and IOS platform.
          </Service>

          <Service title={'Desktop'} icon={<FaLaptop size={100} />} >
            I create native apps that run on windows, Mac Osx, and Linux Operating System
          </Service>

        </div>
      </Section>


      <Section
        title={'My Skills'}
        description={`My technical skills include proficiency in a range of programming languages, as well as experience  with a variety of tools and frameworks.`}>


      </Section>


      <Section
        title={'Some things I have built'}
        description={`Some of the work my hands can do`}
      >

        <div className={`flex flex-row gap-2 flex-wrap justify-between`}>
          {
            thingsBuilt.map((item: any) =>
              <Card
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                image_url={item.image}
                url={item.url}
                technology_used={item.technology}
              />)
          }
        </div>

      </Section>

      <Section
        title={'Github repos'}
        description={`These are some of my public repos`}
      >
        <div className={`flex flex-row gap-1 flex-wrap align-middle justify-between`}>
          <Suspense fallback={<div>Loading repos ...</div>}>
            {reposData.filter((rp: any) => !rp.fork).map((repo: any) => <GitCard
              key={repo.id}
              id={repo.id}
              name={repo.name}
              url={repo.html_url}
              language={repo.language}
            />)}
          </Suspense>
        </div>

      </Section>

      <Section
        title={'Testimony'}
        description={`Introductory sentence`}
      >

      </Section>

      <Section
        title={'Contact me'}
        description={`Shoot me a message, so we can work together on anything you have`}
      >

      </Section>


      <main>

      </main>

      <Footer />
    </>
  )
}
