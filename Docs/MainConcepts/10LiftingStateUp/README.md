## Lifting State Up

Lift the shared state up to the closest common ancestor. 

### Lessons Learned

There should be a single source of truth for any data that changes.  
Rely on the top-down data flow.  

If a value can be derived from either props or state, it probably shouldn’t be in the state.  