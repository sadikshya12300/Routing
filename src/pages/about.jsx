// const About = () => <h1>About Section</h1>;

// export default About;



// import { useState } from "react";

// const About = () => {
//   function Component1() {
//     const [user, setUser] = useState("Jesse Hall");

//     return (
//       <>
//         <h1>{`Hello ${user}!`}</h1>
//         <Component2 user={user} />
//       </>
//     );
//   }

//   function Component2({ user }) {
//     return (
//       <>
//         <h1>Component 2</h1>
//         <Component3 user={user} />
//       </>
//     );
//   }

//   function Component3({ user }) {
//     return (
//       <>
//         <h1>Component 3</h1>
//         <Component4 user={user} />
//       </>
//     );
//   }

//   function Component4({ user }) {
//     return (
//       <>
//         <h1>Component 4</h1>
//         <Component5 user={user} />
//       </>
//     );
//   }

//   function Component5({ user }) {
//     return (
//       <>
//         <h1>Component 5</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//       </>
//     );
//   }
//   return (
//     <div>
//       <div>hi i am About page</div>
//       <Component1 />
//     </div>
//   );
// };

// export default About;



import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const About = () => {
  function Component1() {
    const [user, setUser] = useState({ name: "Jesse Hall" });

    return (
      <UserContext.Provider value={user}>
        <div>
          <h1>{`Hello ${user.name}!`}</h1>
          <Component2 />
        </div>
      </UserContext.Provider>
    );
  }

  function Component2() {
    return (
      <div>
        <h1>Component 2</h1>
        <Component3 />
      </div>
    );
  }

  function Component3() {
    return (
      <div>
        <h1>Component 3</h1>
        <Component4 />
      </div>
    );
  }

  function Component4() {
    return (
      <div>
        <h1>Component 4</h1>
        <Component5 />
      </div>
    );
  }

  function Component5() {
    const user = useContext(UserContext);

    return (
      <div>
        <h1>Component 5</h1>
        <h2>{`Hello ${user.name} again!`}</h2>
      </div>
    );
  }

  return (
    <div>
      <div>hi i am About page</div>
      <Component1 />
    </div>
  );
};

export default About;