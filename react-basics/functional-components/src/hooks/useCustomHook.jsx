import { useEffect, useState } from "react";

const useCustomHook = (someName = "Malek") => {
  const [name, setName] = useState(someName);
  useEffect(() => {
    console.log("Did Mount");
    setName("new Name");
  }, []);

  return name;
};

export default useCustomHook;
