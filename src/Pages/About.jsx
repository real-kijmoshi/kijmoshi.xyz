function About() {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center text-sm sm:text-lg">
        <p className="m-2 sm:mx-10 md:mx-12 lg:mx-24 flex flex-col space-y-3">
          Hi there 👋
          <br />
          <p className="mx-2">
            My name is Igor and I'm a young developer from Poland.
          </p>
          <p className="mx-2">
            I'm interested in all kinds of things but mostly in js frameworks
            and libraries, such as React, React-native Node.js, Express.js,
            Next.js, etc.
          </p>
          <p className="mx-2">You can see my projects in the projects tab.</p>
          <p className="mx-2">
            I also never gonna give you up, never gonna let you down, never
            gonna run around and desert you, never gonna make you cry, never
            gonna say goodbye, never gonna tell a lie and hurt you. (copilot
            wrote this not me)
          </p>
        </p>
      </div>

      <div className="absolute w-40 h-40 top-0 left-0 m-[-16] z-[-1] bg-blue-400 rounded-full" />
      <div className="absolute w-40 h-40 top-0 right-0 m-10 mt-40 md:m-24 z-[-1] bg-green-400 rounded-full" />
      <div className="absolute w-40 h-40 bottom-0 left-0 m-24 z-[-1] bg-yellow-400 rounded-full" />
    </div>
  );
}

export default About;
