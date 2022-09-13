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
        <title>Mulagi | Software Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
      
        <meta property="og:title" content="best developer in Kenya">
        </meta>
        <meta property="og:description" content="Best practices in software development">
        </meta>
        <meta property="og:url" content="">

        </meta><meta property="og:type" content="website"></meta>
        <link rel="icon" href="/mulagiLogo.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
