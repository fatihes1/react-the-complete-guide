import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
    const counter = useCounter(true);

    // We commented out the code below because we moved it to the custom hook

    // const [counter, setCounter] = useState(0);
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCounter((prevCounter) => prevCounter + 1);
    //   }, 1000);
    //
    //   return () => clearInterval(interval);
    // }, []);

    return <Card>{counter}</Card>;
};

export default ForwardCounter;
