import React from "react";

const Blogs = () => {
    return (
        <div>
            <div className="container py-16">
                <h1 className="text-3xl lg:text-4xl font-medium pb-8 text-center">Blogs</h1>
                <div className="pb-5">
                    <h2 className="lg:text-3xl text-2xl pb-3">How will you improve the performance of a React Application?</h2>
                    <p className="lg:text-lg">
                        We need bto try to keep component state locally as needed, and can extract the part of the code that handles the state of the component and make it local to that part of the
                        code. we must only memoize a component when necessary, React.memo,useMemo, useCallback function can be used to prevent unnecessary re-renders. Code-splitting is another
                        important optimization technique for a React application by using import function. Using the windowing theory, we can render to the DOM only the visible portion to the user.
                        Then, when scrolling, the remaining list items render while replacing the items that exit the viewport. Also, we can improve page load time by avoiding render all images at
                        once those are lazy images.
                    </p>
                </div>
                <div className="pb-5 pt-3">
                    <h2 className="lg:text-3xl text-2xl pb-3">What are the different ways to manage a state in a React application?</h2>
                    <p className="lg:text-lg">
                        There are four main types of state we need to manage in your React applications: Local state, Global state, Server state, URL state. <br /> Local state: Local state is data
                        where we usually manage in one or another component. Local states are most commonly managed in React using the useState hook. It accept any valid primitive and object values
                        and data. Also, we can pass that setter function as a callback function to other components. useReducer is another option, although instead of just an initial state it accepts
                        a reducer. <br />
                        Global state: Global state is data where we manage across multiple components. This state is required if you want to retrieve and update data anywhere in the application. Step
                        of Global state, to get the prop, you need to initialize it. To do this, use React Hook useReducer to establish a connection to the reducer. useReducer receives the reducer
                        imported from the initialState object and the GlobalState component. Then pass the connection status and the dispatch function to change that status. <br />
                        Server state: Data from an external server that needs to be integrated with the UI state.there are two libraries that make data fetching in React a breeze, such as SWR and
                        React Query.They give a convenient hook to both get and change data from an API, keep track of all the necessary states and cache the data. <br />
                        URL state: Data that exists on our URLs, including the query parameters and pathname. URL status is usually fairly easy to manage with custom hooks that provide all the
                        information you need about location, history, when used React Router, we can use useHistory or useLocation to get all the information you need. We can use the useParams hook to
                        fetch data. If we use Next.js, we can access almost everything directly by calling useRouter.
                    </p>
                </div>
                <div className="pb-5 pt-3">
                    <h2 className="lg:text-3xl text-2xl pb-3">How does prototypical inheritance work?</h2>
                    <p className="lg:text-lg">
                        JavaScript is a prototype-based object-oriented programming language. After updating ES6, JavaScript allowed "typical inheritance". This means that you can share, extend, and
                        copy objects and methods Sharing that can save hours of coding. Objects makes it easy to inherit structures (arrays), behaviors (functions / methods), and states (data values).
                    </p>
                </div>
                <div className="pb-5 pt-3">
                    <h2 className="lg:text-3xl text-2xl pb-3">
                        Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the
                        setProducts
                    </h2>
                    <p className="lg:text-lg">
                        const [products, setProducts] = useState([]), so this syntax is called “array destructuring”. we declare a new state variable by calling the useState Hook. It returns a pair of
                        values, two new variables to which we give names: products , setProducts . We’re calling our variable products because it holds the number of button clicks.The second returned
                        item is itself a function. It lets us update the products so we’ll name it setProducts. When updating directly, subsequent calls to setState () can replace only the updates
                        made. If you update the state directly, this.state will not change immediately. Instead, a pending state transition is created, and when accessed after calling this method,
                        only the current value is returned. You lose control over the state of all components.
                    </p>
                </div>
                <div className="pb-5 pt-3">
                    <h2 className="lg:text-3xl text-2xl pb-3">What is a unit test? Why should write unit tests?</h2>
                    <p className="lg:text-lg">
                        Unit testing is a software development process in which the smallest testable part of an application, called a unit, is individually and independently checked for proper
                        operation. Developers create unit tests for their code to make sure their code is working properly. It ensures that all code meets quality standards before it’s deployed. All
                        errors are detected easily and quickly. It provide documentation and it is reusable and reliable. It help measure performance, improve code coverage, reduce code complexity,
                        save time and cost.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
