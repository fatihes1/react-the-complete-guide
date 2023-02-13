
import Card from './Card';
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);

  // We commented out the code below because we moved it to the custom hook
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);
  //
  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
