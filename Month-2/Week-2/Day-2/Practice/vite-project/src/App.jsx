import React from 'react';
import Home from './assets/Home';
import Profile from './assets/Profile';
import Card from './assets/card';

function App() {
  return (
   <>
   {/* Hello
   <Home name="Binit" age="19" obj={{email: "binit9854@gmail.com",std1: {name: "S" }}  }/> */}

   {/* <Profile name="Binit Biswal" children={"Children Hii"}>
    <h1>This is heading</h1>
    </Profile> */}
  <div >
    <Card animal={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQDOj6o-Y5M_uqfkkNH7KEueLiaZWg8Fa1C26ypq10F4ci9g1uU8ORAE&s=10",
      title: "Cat title",
      desc: "This is a nice cat."
    }} />
    <Card animal={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj52IoidB3ghopPH5raotIgz1Hm7kMPji6V95YnW9i1A&s=10",
      title: "Dog title",
      desc: "This is a lovely dog."
    }} />
    <Card animal={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoV1Ncjd_0ioTnmPR6oivpaaKJu9K4jjI_LbjP0RyCQ24mwLybxl914NX&s=10",
      title: "Bird title",
      desc: "This is a beautiful bird."
    }} />
    <Card animal={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOz69eNmkUZGotdcKVBEX4lJM56JXIQQ7Bc-tJXjNigV1WoKY4EKxm2KCz&s=10",
      title: "Fish title",
      desc: "This is a fascinating fish."
    }} />
    <Card animal={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZhbKEiLmUCRa_r5_PG2sfZyN6KGE6cFB42yF8s-2Sza-GDDZThhyjpc&s=10",
      title: "Rabbit title",
      desc: "This is a cute rabbit."
    }} />
  </div>
  </>
  );
}

export default App;
