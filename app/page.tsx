import Image from 'next/image'
import Header from './components/Header'
import Section from './components/Section'
import { Suspense } from 'react';
import GitCard from './components/GitCard';

import { FaAndroid, FaAngular, FaApple, FaChrome, FaCss3, FaDeskpro, FaDesktop, FaEye, FaFirefoxBrowser, FaGlobeAfrica, FaHtml5, FaInternetExplorer, FaLaptop, FaLinux, FaMobile, FaPhone, FaPhoneSquare, FaReact, FaSafari, FaSass, FaWindows } from "react-icons/fa";
import Card from './components/Card';
import Service from './components/Service';
import Footer from './components/Footer';

import projects from './assets/files/project.json';
import proficiency from './assets/files/proficiency.json';

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

export default async function Home() {

  const reposData = await getData();


  return (

    <>

      <Header />

      <Section
        title={'Things I build'}
        description={`I build things that make people's lives easier`}>

        <div className={`flex flex-row justify-between bg-[#101010] p-10 pt-16 rounded-lg gap-6 flex-wrap`}>

          {/* What we build */}
          <Service
            title={'Web App'}
            icon={<FaFirefoxBrowser size={50} />}

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
        title={'My Skills'}
        description={`My technical skills include proficiency in a range of programming languages, as well as experience  with a variety of tools and frameworks.`}>

        <div className={`flex flex-row gap-3 w-full flex-wrap`}>

          <Classifier title={'Programming languages'} >
            <ul className={`w-full`}>
              {
                proficiencyData.languages.sort((a, b) => (a.percentage > b.percentage) ? -1 : 1).map((language: any) =>
                  <li key={language.id}>
                    <LineProgress key={language.id} percentage={language.percentage} title={language.name} />
                  </li>)
              }
            </ul>
          </Classifier>


          <Classifier title={'Frameworks'} >
            <ul className={`w-full`}>
              {
                proficiencyData.frameworks.sort((a, b) => (a.percentage > b.percentage) ? -1 : 1).map((language: any) =>
                  <li key={language.id}>
                    <LineProgress key={language.id} percentage={language.percentage} title={language.name} />
                  </li>)
              }
            </ul>
          </Classifier>


          <Classifier title={`Tools and Platforms`} >
            <ul className={`w-full`}>
              {
                proficiencyData.tools.sort((a, b) => (a.percentage > b.percentage) ? -1 : 1).map((language: any) =>
                  <li key={language.id}>
                    <LineProgress key={language.id} percentage={language.percentage} title={language.name} />
                  </li>)
              }
            </ul>
          </Classifier>

        </div>

      </Section>


      <Section
        title={'Projects I have built'}
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
              description={repo.description}
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
