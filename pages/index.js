import Cursor from '../components/Cursor'

const HomePage = () => {
  return (
    <div>
      <section>
        <p class='abstract'>
          I&apos;m Phillip Powell. I design and engineer web apps, using modern
          web technologies, and with a focus on exceptional user experience.
        </p>
        <p>
          My natural habitat is the browser, working with modern JavaScript,
          frontend frameworks like React, and advanced CSS techniques. I have a
          wealth of experience in backend development, and create APIs and web
          services with Node and Python.
        </p>
        <p>
          I solve difficult problems by leveraging modern technology and
          concepts, to create solutions which are a delight to use.
        </p>
        <p>
          I bring over two decades of experience to my craft, and possess a
          broad range of skills. I&apos;m an experienced leader and articulate
          communicator. I&apos;m as comfortable working autonomously as I am as
          part of a team.
        </p>
        <p>
          Oh, and I&apos;ve won an award or two in my time, including a Cannes
          Lion award and a BAFTA nomination.
        </p>
        <p>
          <a href='https://www.linkedin.com/in/pmpowell/'>
            Find out more about me on LinkedIn &raquo;
          </a>
        </p>
      </section>
      <section>
        <p>
          More coming soon... <Cursor />
        </p>
      </section>
    </div>
  )
}

export default HomePage
