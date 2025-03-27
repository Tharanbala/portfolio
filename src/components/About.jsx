import React from 'react'


const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#1E1E1E] text-gray-300 p-4"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full">
        <div className="mt-24">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 ">
            About Me
          </p>
        </div>
        <div>
          <div className="mt-8">
            With over three years of experience as a Full Stack Developer, I
            bring a strong foundation in both frontend and backend technologies,
            coupled with a passion for building impactful, scalable, and
            user-centric solutions. My journey in software development has
            equipped me with the versatility to contribute meaningfully across
            diverse projects and dynamic team environments.
            <p>
              I have hands-on experience in a wide range of technologies,
              including:
            </p>
            <p>
              1. <span className="text-yellow-300">Backend Development:</span>{" "}
              Proficient in Python, Node.js, and Dot Net, with deep experience
              building robust server-side applications using Flask and Django
              frameworks.
            </p>
            <p>
              2. <span className="text-yellow-300">Frontend Development:</span>{" "}
              Skilled in creating dynamic and responsive user interfaces using
              React.js, enhanced by TypeScript for improved code quality and
              maintainability. I also leverage TailwindCSS for efficient and
              consistent styling.
            </p>
            <p>
              3. <span className="text-yellow-300">Data Science:</span> Capable
              of applying data science techniques to extract valuable insights
              and drive data-informed decisions.
            </p>
            <p>
              4. <span className="text-yellow-300">Cloud Technologies:</span>{" "}
              Experienced in deploying and managing applications on cloud
              platforms, ensuring scalability and reliability.
            </p>
            <p className="py-4">
              Beyond technical proficiency, I’m recognized for essential soft
              skills that are critical in today’s collaborative workspaces:
            </p>
            <p>
              1. <span className="text-yellow-300">Decision-making:</span>{" "}
              Ability to analyze complex situations and make informed, timely
              decisions.
            </p>
            <p>
              2. <span className="text-yellow-300">Leadership:</span> Proven
              track record of effectively leading teams and guiding projects to
              successful completion.
            </p>
            <p>
              3. <span className="text-yellow-300">Communication:</span>{" "}
              Excellent verbal and written communication skills, facilitating
              clear and efficient collaboration with team members and
              stakeholders.
            </p>
            <p className="py-4">
              These combined technical and interpersonal skills have
              consistently allowed me to contribute to enhanced business
              performance, delivering solutions that not only meet but often
              exceed expectations.
            </p>
            <p><span className="text-yellow-300">Phone number: </span>
            (414) 243-5462 </p>
            <p><span className="text-yellow-300">Email: </span>{" "}
            tharanbala33@gmail.com </p>
            <p><span className="text-yellow-300">Address: </span> Milwaukee, WI </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About