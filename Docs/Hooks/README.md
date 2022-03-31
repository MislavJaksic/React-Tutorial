## Hooks

### State Hook

```jsx
const [data, setData] = useState({ "initialData": [] });
const [query, setQuery] = useState('hello_world');
const [search, setSearch] = useState('hello_world');
```

### Effect Hook

```jsx
const [data, setData] = useState({ "initialData": [] });
const [query, setQuery] = useState('hello_world');
const [search, setSearch] = useState('hello_world');
```

```jsx
useEffect(async () => {  // Runs when the component mounts or updates
    const fetchData = async () => {
      const response = await fetch(`https://search?query=${search}`);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [search]);  // Define all variables on which the hook depends; With [] the useEffect runs only when the component mounts
```

```jsx
<>
<input
  type="text"
  value={query}
  onChange={(event) => setQuery(event.target.value)}  // Change `query` value when it is typed in
/>
<button type="button" onClick={() => setSearch(query)}>Search</button>  // Exists to make sure useEffect isn't triggered every time you type in a character
</>
```

### Custom Hook

```jsx
const useDataApi = (initialQuery, initialData) => {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState(initialQuery);
  const [search, setSearch] = useState('hello_world');
  const [isLoading, setIsLoading] = useState(false);
  // ...
  return [{ data, isLoading }, setIsLoading];
}
```

```jsx
const [{ data, isLoading, isError }, doFetch] = useDataApi('hello_world', { "initialData": [] });
// ...
```

Custom hooks extract functionality and expose only data and set functions.  
