import User from "./assets/Components/User";

function App() {
  return (
    <div className="h-full w-full bg-slate-900 text-white p-3 flex font-sans">
      <div className="w-160 ml-2 text-xl">
          <h1 className="w-128 p-4 text-4xl font-medium">
            We're always looking for awesome people to join us
          </h1>
          <p className="p-3 mt-1 text-gray-400 w-128">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            incidunt repellendus optio excepturi commodi! Praesentium explicabo
            amet.
          </p>        
          <a href="/mockup.png" target="_blank"><img className="rounded-4xl items-center flex justify-center w-132 p-2.5 h-144 mt-8" src="mockup.png" alt="image" /></a>
      </div>

      <div className="mt-40 w-168">
        <User
          useRole="Full Stack Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore sapiente, nobis aliquid fuga eligendi delectus."
          price="$75,000 USD"
          place="Paris, France"
        />
        <hr className="text-gray-500 w-148 ml-7"></hr>
        <User
          useRole="Front-End Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore sapiente, nobis aliquid fuga eligendi delectus."
          price="$75,000 USD"
          place="San Francisco, CA"
        />
        <hr className="text-gray-500 w-148 ml-7"></hr>
        <User
          useRole="Back-End Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore sapiente, nobis aliquid fuga eligendi delectus."
          price="$85,000 USD"
          place="Washington, DC"
        />
        <hr className="text-gray-500 w-148 ml-7"></hr>
        <button className="p-3 ml-4 mt-4 font-medium text-xl text-violet-400 flex gap-2.5"><a href="https://www.google.com/" target="_blank">View all opening
        </a></button>
      </div>
    </div>
  );
}

export default App;