import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
       <Head>
    <meta charset="utf-8" />
    <title>Jackton Mulagi - Fullstack Software Engineer in Nairobi, Kenya</title>
    <meta name="description" content="I am a skilled fullstack software engineer based in Nairobi, Kenya. My expertise includes JavaScript, React, Next.js, Java, Spring Boot, MySQL, Figma, Django, and Node.js." />
    <meta property="og:url " content="http://www.jacktonmulagi.com/" />
    <meta property="og:title" content="Jackton Mulagi - Fullstack Software Engineer in Nairobi, Kenya" />
    <meta property="og:site_name" content="Jackton Mulagi" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://www.jacktonmulagi.com/assets/navLogo.svg" />
    <meta property="og:locale" content="en_KE" />
    <meta property="og:description" content="I am a skilled fullstack software engineer based in Nairobi, Kenya. My expertise includes JavaScript, React, Next.js, Java, Spring Boot, MySQL, Figma, Django, and Node.js." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="As a highly skilled fullstack software engineer based in Nairobi, Kenya, I specialize in JavaScript, React, Next.js, Java, Spring Boot, MySQL, Figma, Django, and Node.js development." />
    <link rel="icon" href="assets/navLogo.svg" />
</Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
