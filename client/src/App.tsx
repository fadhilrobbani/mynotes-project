import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  interface Data {
    id: string;
    username: string;
    password: string;
    email: string;
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const datas = await fetch('/notes/new');
      const json = await datas.json();
      console.log(json);
      setData(json);
    };
    getData();
  }, []);
  return (
    <>
      <div>test</div>
    </>
  );
};

export default App;
