<h1>React Redux Introduction</h1>
<h3>Why redux:</h3>
<p>In small apps, you can manage data using React's state. But as the app grows, it becomes tricky to pass data between many components. </p>

<p>Redux solve this problem by creating a centeralize store that holds all the data. This store can be accessed and updated by any part of the app.</p>

<h3>What is Redux?</h3>
<p>Redux is a tool that helps maage data (aslo known as "state") in large React apps.</p>
<p>It allows us to keep all our app's data in a single place. known as the redux store, making it easy to share and update data across different parts of the app.</p>

<h3>How Redux Works?</h3>
<p><b>1) Store:</b> this is where Redux keeps all your data.</p>
<p><b>2) Action:</b> this is an object, which tell the redux what to do (like adding a task).</p>
<p><b>3) Reducer:</b> How to do It actually change the data in the store based on the actions.</p>

<h3>Store</h3>
<p>the Redux store is like a big box where all your applications data is kept safe. Everything you do with Redux-whether adding, removing, or updating data-goes through this store</p>

<h3>Action</h3>
<p>this is an object, which tell the redux what to do (like adding a task).</p>
<pre>
{
    type:"counter/add",
    payload:{
        incrementBy:10,
    }
}
</pre>

<pre>
{
    type:"counter/decrement",
    payload:{
        decrementBy:10,
    }
}
</pre>


<h3>Reducer</h3>
<p>How to do It actually change the data in the store based on the actions.</p>


<pre>
export const counterReducer = (state = initialState, action)=>{
    switch (action.type){
        case "counter/add":
            return
                {...state, value: state.value + action.payload.incrementBY };
        default:
            return state;
    }
}
</pre>

<h1>Redux Advantages</h1>
<h3>Centralize State Management</h3>
<p>Redux stores your app's state in one place. making it easier to manage and access data across components.</p>
<h3>Global Access</h3>
<p>Any component can access and update the state without passing props down.</p>
<h3>Predictable Updates</h3>
<p>State changes are controlled and predictable using reducers.</p>
<h3>DevTools</h3>
<p>Powerfull tools for debugging, inspecting state, and replaying actions.</p>
<h3>Async Support</h3>
<p>Middleware like Thunk or Saga handles async tasks, keeping the code clean.</p>

<h1>Resux Thunk</h1>
<h3>What is Resux Thunk?</h3>
<p>Redux Thunk is middleware that allows you to write action creators that return a function instead of an action. This function can perform asynchronous logic (like API requests) and dispatch actions after the operation is completed (e.g., fetching tasks and then dispatching them to the store).</p>
<p>when you return a funtion from an action creator, Redux Thunk Provides the dispatch function as an argument. This allows you to manually dispatch other actions (e.g., when an API call succeeds or fails.)</p>

<h1>Resux Toolkit</h1>
<h3>How it's work</h3>
<img src="image.png" alt=""/>