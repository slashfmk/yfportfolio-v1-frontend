import Image from 'next/image'
import Header from './components/Header'
import Section from './components/Section'
import { Suspense } from 'react';
import GitCard from './components/GitCard';

import { FaAndroid, FaAngular, FaApple, FaFirefoxBrowser, FaHtml5, FaLaptop, FaLinux, FaMobile, FaReact, FaSafari, FaSass, FaWindows } from "react-icons/fa";
import Card from './components/Card';
import Service from './components/Service';
import Footer from './components/Footer';

import projects from './assets/files/project.json';
import proficiency from './assets/files/proficiency.json';
import testimony from './assets/files/testimony.json';

import LineProgress from './LineProgress';
import Classifier from './components/Classifier';


async function getData() {

  const res = await fetch('https://api.github.com/users/slashfmk/repos?per_page=100');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// Mockup data
const thingsBuilt = projects;
const proficiencyData = proficiency;
const testimonyData = testimony;

export default async function Home() {

  const reposData = await getData();


  return (

    <>

      <Header />

      <Section
        id={`thingsibuild`}
        title={'Things I build'}
        position={`left`}
        description={`I build things that make people's lives easier`}>

        <div className={`flex flex-row justify-between bg-[#101010] p-10 pt-16 rounded-lg gap-6 flex-wrap`}>

          {/* What we build */}
          <Service
            title={'Web App'}
            icon={<FaSafari size={50} />}

            details={
              <div className={`flex flex-row justify-between align-middle z-10 relative top-[-45px]`}>
                <FaReact size={50} className={`hover:text-blue-500 transition-all duration-500`} />
                <FaAngular size={50} className={`hover:text-red-700 transition-all duration-500`} />
                <FaHtml5 size={50} className={`hover:text-orange-600 transition-all duration-500`} />
                <FaSass size={50} className={`hover:text-pink-700 transition-all duration-500`} />
              </div>
            }>

            I create web based app for frontend and backend with a variety of tech stacks.
          </Service>

          <Service
            title={'Mobile App'}
            icon={<FaMobile size={50} />}

            details={
              <div className={`flex flex-row gap-3 justify-between align-middle z-10 relative top-[-45px]`}>
                <FaApple size={50} className={`hover:text-gray-500 transition-all duration-500`} />
                <FaAndroid size={50} className={`hover:text-green-500 transition-all duration-500`} />
                <FaReact size={50} className={`hover:text-blue-500 transition-all duration-500`} />
              </div>
            }>
            I create native Mobile based app that run on both Android and IOS platform.
          </Service>

          <Service
            title={'Desktop'}
            icon={<FaLaptop size={50} />}
            details={
              <div className={`flex flex-row justify-between align-middle z-10 relative top-[-45px]`}>
                <FaWindows size={50} className={`hover:text-blue-500 transition-all duration-500`} />
                <FaApple size={50} className={`hover:text-gray-500 transition-all duration-500`} />
                <FaLinux size={50} className={`hover:text-orange-500 transition-all duration-500`} />
              </div>
            }
          >
            I create native apps that run on windows, Mac Osx, and Linux Operating System
          </Service>

        </div>
      </Section>


      <Section
        id={`skills`}
        title={'My Skills'}
        position={`right`}
        description={`My technical skills include proficiency in a range of programming languages, as well as experience  with a variety of tools and frameworks.`}>

        <div className={`flex flex-row gap-3 w-full flex-wrap`}>

          <Classifier title={'Programming languages'} >
            <ul className={`w-full`}>
              {
                proficiencyData.languages.sort((a, b) => (a.percentage > b.percentage) ? -1 : 1).map((language: any) =>
                  <li key={language.id * 76}>
                    <LineProgress key={language.id * 66} percentage={language.percentage} title={language.name} />
                  </li>)
              }
            </ul>
          </Classifier>


          <Classifier title={'Frameworks'} >
            <ul className={`w-full`}>
              {
                proficiencyData.frameworks.sort((a, b) => (a.percentage > b.percentage) ? -1 : 1).map((language: any) =>
                  <li key={language.id * 78}>
                    <LineProgress key={language.id * 79} percentage={language.percentage} title={language.name} />
                  </li>)
              }
            </ul>
          </Classifier>


          <Classifier title={`Tools and Platforms`} >
            <ul className={`w-full`}>
              {
                proficiencyData.tools.sort((a, b) => (a.percentage > b.percentage) ? -1 : 1).map((language: any) =>
                  <li key={language.id * 93}>
                    <LineProgress key={language.id * 34} percentage={language.percentage} title={language.name} />
                  </li>)
              }
            </ul>
          </Classifier>

        </div>

      </Section>


      <Section
        id={`projects`}
        title={'Projects I have built'}
        position={`left`}
        description={`Some of the work my hands can do`}
      >

        <div className={`flex flex-row gap-2 flex-wrap justify-between`}>
          {
            thingsBuilt.map((item: any) =>
              <Card
                id={item.id}
                key={item.id * 30}
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
        id={`repos`}
        title={'Github repos'}
        position={`right`}
        description={`These are some of my public repos`}
      >
        <div className={`flex flex-row gap-1 flex-wrap align-middle justify-between`}>
          <Suspense fallback={<div>Loading repos ...</div>}>
            {reposData.filter((rp: any) => !rp.fork).map((repo: any) => <GitCard
              key={repo.id * 22}
              id={repo.id}
              name={repo.name}
              url={repo.html_url}
              description={repo.description}
              language={repo.language}
            />)}
          </Suspense>
        </div>

      </Section>

      <Section
        id={`testimony`}
        title={'Testimony'}
        position={`left`}
        description={`Trusted by many of people That I have worked with`}
      >

        <div className={`flex flex-col gap-12 rounded-xl`}>

          <ul className={`flex flex-row self-center p-3 w-max rounded-full`}>
            {
              testimony.map((testy: any) =>
                <li key={testy.id * 122}>
                  <div className={`relative mr-[-1.5rem] hover:z-10 hover:scale-150 duration-700 transition-all`}>
                    <Image
                      key={testy.id * 88}
                      src={`/photos/${testy.photo}`}
                      width={60} height={60} alt={''}
                      className={`rounded-full border-4 border-[#171717]`} />
                  </div>
                </li>)
            }
          </ul>

          <div
            className={`flex flex-col gap-4 text-white
          bg-gradient-to-r from-[#0da3f6] to-[#06d967]
          rounded-lg bg-black w-full justify-center align-middle py-7`}>

            <p className="text-center text-3xl font-bold">&ldquo;
              {` Most wonderful Experience with the result I got from Yannick work `}
              &rdquo;
            </p>

            <div className={`self-center`}>
              <Image
                src={`/photos/5.jpg`}
                width={150} height={150}
                alt={`Cool stuff`}
                className={`rounded-full border-gray-300 border-8`} />
            </div>

            <div>
              <h2 className="text-sm text-center">{`Brinette Lohombo`}</h2>
              <h2 className="text-lg text-center font-bold">{`Naskad`}</h2>
            </div>

          </div>


        </div>

      </Section>

      <Section
        id={`contact`}
        title={'Contact me'}
        position={`right`}
        description={`Shoot me a message, so we can work together on anything you have`}
      >

      </Section>


      <main>

      </main>

      <Footer />
    </>
  )
}
