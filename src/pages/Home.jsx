import { motion } from "framer-motion";
function Home() {
  return (
    <section className="md:px-5">
      <motion.section
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-4xl font-medium mb-5 inline-block">Hi, I{`'`}m Yeison 👋</h2>
        <p className="mb-3 text-center md:text-left">
        Frontend Web Developer passionate and self-taught.

        </p>
        <p className="text-center md:text-left">
        I enjoy tackling challenges and finding creative solutions.
        I always maintain a positive and fun environment at work. 
        I'm excited to continue growing and collaborating with innovative people! 
        Thank you for getting to know me!
        </p>
      </motion.section>

      <section className="flex flex-col w-full justify-center mt-7">
        <motion.h2
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: .8 }}
          className="text-3xl mt-4 mb-10 font-medium "
        >
          Knowledges
        </motion.h2>
        <section className="text-indigo-600  dark:text-emerald-500 flex flex-wrap text-center justify-center gap-12">
          <motion.article
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="px-5"
          >
            <h3 className="font-medium text-slate-800 dark:text-slate-300   mb-1 text-xl">
              Programming languages
            </h3>
            <ul className="flex flex-col items-center text-lg">
              <li className="flex gap-3">
                <p>JavaScript</p>
              </li>
              <li className="flex gap-3">
                <p>PHP</p>
              </li>
              <li className="flex gap-3">
                <p>HTML</p>
              </li>
              <li className="flex gap-3">
                <p>CSS</p>
              </li>
            </ul>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="px-5"
          >
            <h3 className="font-medium text-slate-800 dark:text-slate-300  mb-1 text-xl">
              FrameWorks
            </h3>
            <ul className="flex flex-col items-center text-lg">
              <li className="flex gap-3">
                <p>React</p>
              </li>
              <li className="flex gap-3">
                <p>Bootstrap</p>
              </li>
              <li className="flex gap-3">
                <p>Tailwind</p>
              </li>
            </ul>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="px-5"
          >
            <h3 className="font-medium text-slate-800 dark:text-slate-300  mb-1 text-xl">
              Data Bases
            </h3>
            <ul className="flex flex-col items-center text-lg">
              <li className="flex gap-3">
                <p>MySQL</p>
              </li>
              <li className="flex gap-3">
                <p>PostgresSQL</p>
              </li>
              <li className="flex gap-3">
                <p>SQLServer</p>
              </li>
            </ul>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="max-w-[18rem] px-5"
          >
            <h3 className="font-medium text-slate-800 dark:text-slate-300  mb-4 text-center text-xl">
              Tools
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 mx-auto">
              <li className="p-2 bg-gray-500 rounded-xl text-slate-100">
                <p>Git</p>
              </li>
              <li className="p-2 bg-gray-500 rounded-xl text-slate-100">
                <p>Linux</p>
              </li>
              <li className="p-2 bg-gray-500 rounded-xl text-slate-100">
                <p>Redux Toolkit</p>
              </li>
              <li className="p-2 bg-gray-500 rounded-xl text-slate-100">
                <p>Postman</p>
              </li>
              <li className="p-2 bg-gray-500 rounded-xl text-slate-100">
                <p>VScode</p>
              </li>
            </ul>
          </motion.article>
        </section>
      </section>
    </section>
  );
}

export { Home };
