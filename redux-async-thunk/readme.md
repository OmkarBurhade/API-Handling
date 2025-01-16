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

# Action
<p>this is an object, which tell the redux what to do (like adding a task).</p>

{
    type:"counter/add",
    payload:{
        incrementBy:10,
    }
}

{
    type:"counter/decrement",
    payload:{
        decrementBy:10,
    }
}