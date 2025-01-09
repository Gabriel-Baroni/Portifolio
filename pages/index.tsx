import Hero from '../components/Hero';
import Header from '../components/Header';
import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head'; 
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkiills';
import { fetchSocials } from '../utils/fetchSocials';


type Props =
{
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home  =({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hiddenl z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4169E1]/80">
      <Head>
        <title>Gabriel Baroni Portifolio</title>
      </Head>

      {/* Header*/}
      <Header socials={socials} />

      {/* Hero*/}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About*/}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}  />
      </section>

      {/* Experience*/}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills*/}
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section> 

      {/* Projects*/}
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section> 

      {/* Contact Me */}
      <section  id="contact" className="snap-start">
        <ContactMe/>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className=" flex items-center justify-left">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="LOGO_GAIA-removebg-preview.png" 
              alt="Users\gdepa\OneDrive\Documentos\Projetos\portifolio\public\LOGO_GAIA-removebg-preview.png"
            />
          </div>
        </footer>
      </Link>
    </div>


  );
};

export default Home;
    
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo(); 
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] =  await fetchSocials();

  return{
    props:{
      pageInfo,
      experiences,
      socials,
      skills,
      projects,
    },
    revalidate: 10,
  };




  
};