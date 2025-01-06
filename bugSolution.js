```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The dependency array now includes count, fixing the infinite loop
    // This will only run when the count changes
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```