import Image from 'next/image';
import { Suspense } from 'react';
import GitCard from './components/GitCard';
import Header from './components/Header';
import Section from './components/Section';

import { FaAndroid, FaAngular, FaApple, FaArrowAltCircleRight, FaHtml5, FaLaptop, FaLinux, FaMobile, FaReact, FaSafari, FaSass, FaWindows } from "react-icons/fa";
import Card from './components/Card';
import Footer from './components/Footer';
import Service from './components/Service';

import proficiency from './assets/files/proficiency.json';
import projects from './assets/files/project.json';
import testimony from './assets/files/testimony.json';

import CardXl from './components/CardXl';
import CardXlCarousel from './components/CardXlCarousel';
import Classifier from './components/Classifier';
import LineProgress from './components/LineProgress';


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
        title={'My expertise'}
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

        {/* <div className={`flex flex-row gap-10 w-full flex-wrap`}> */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full flex-wrap`}>

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
                    <LineProgress key={language.id * 34} percentage={language.percentage} title={language.name} />
                  </li>)
              }
            </ul>
          </Classifier>

        </div>

      </Section>

      <Section
        id={`projects`}
        title={'Projects'}
        position={`left`}
        description={`Some of the work my hands can do`}
      >

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between`}>
          {
            thingsBuilt.map((item: any) =>
              <Card
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                image_url={`/project/${item.image}`}
                github_url={item.github_url}
                playStore_url={item.playstore_url}
                appStore_url={item.appstore_url}
                url={item.url}
                technology_used={item.technology}
                isDone={item.isdone} />)
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
        id={`testimony`}
        title={'Testimony'}
        position={`left`}
        description={`What people say about my work`}
      >

        <div className={`flex flex-col gap-12 rounded-xl`}>

          <ul className={`flex flex-row self-center p-3 w-max rounded-full`}>
            {
              testimony.map((testy: any) =>
                <li key={testy.id}>
                  <div className={`relative mr-[-1.5rem] hover:z-10 hover:scale-150 duration-700 transition-all`}>
                    <Image
                      key={testy.id}
                      src={`/photos/${testy.photo}`}
                      width={60} height={60} alt={''}
                      priority={true}
                      className={`rounded-full border-4 border-[#171717]`} />
                  </div>
                </li>)
            }
          </ul>

          <CardXlCarousel>

            {
              testimonyData.map((testy: any) =>
                <CardXl key={testy.id} photoUrl={`/photos/${testy.photo}`} author={testy.author} company={testy.company}>
                  {testy.comment}
                </CardXl>)
            }

          </CardXlCarousel>

        </div>

      </Section>

      <Section
        id={`contact`}
        title={`Contact me`}
        position={`right`}
        description={`Anything I can help with?? Let me know, so we can work together on it`}
      >


        <form action={`#`} className={`flex flex-col gap-5`}>

          <div className={`flex flex-col justify-between gap-5 sm:flex-row`}>
            <input type="text" name="fullname" placeholder="What's your name" className={`text-center sm:text-left`} required />
            <input type="email" name="email" placeholder="What is your email address" className={`text-center sm:text-left`} required />
          </div>

          <textarea
            placeholder="Hello!, I think we need a mobile or web app for our company"
            className={`text-center`} required>
          </textarea>

          <button className={`bg-[#101010] hover:bg-green-600 hover:text-white transition-all duration-700 p-7 rounded-lg flex flex-row gap-6 justify-center my-2 w-full sm:max-w-xs self-center`}>
            Send your message
            <FaArrowAltCircleRight size={20} /></button>
        </form>

      </Section>

      <Footer />
    </>
  )
}
