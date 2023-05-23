import Image from 'next/image'
import Header from './components/Header'
import Section from './components/Section'
import { Suspense } from 'react';
import GitCard from './components/GitCard';


// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaEye } from "react-icons/fa";
import Card from './components/Card';


async function getData() {

  const res = await fetch('https://api.github.com/users/slashfmk/repos?per_page=100');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
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
    technology: ["ReactJs, Springboot, Tailwinds"]
  },
  {
    id: 2,
    title: "Cool stuff",
    image: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "#",
    detail: "Some details",
    technology: ["ReactJs, Springboot, Tailwinds"]
  },
  {
    id: 3,
    title: "Crazy ass",
    image: "https://images.pexels.com/photos/2142424/pexels-photo-2142424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "www.snipper.com",
    detail: "Some details",
    technology: ["ReactJs, Springboot, Tailwinds"]
  },
  {
    id: 4,
    title: "Women Webapp",
    image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg",
    url: "#",
    detail: "Some details",
    technology: ["ReactJs, Springboot, Tailwinds"]
  },

]

export default async function Home() {

  const reposData = await getData();


  console.log(reposData);

  return (
    <>

      <Header />

      <Section
        title={'Things I build'}
        description={`Introductory sentence`}
      >
        <div className={`h-80 bg-black`}>

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
                key={item.id}
                title={item.title}
                description={item.description}
                image_url={item.image}
                url={item.url}
                technology_used={["Java", "spring", "NextJs"]}
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


      <main>

      </main>
    </>
  )
}
