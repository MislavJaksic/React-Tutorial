## Forms

HTML form elements keep an internal state.  

### Controlled Components

An input form element whose value is controlled by React.

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);}

  handleChange(event) {this.setState({value: event.target.value});}
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );}}
```

The same goes for `<textarea>` and `<select>/<option>`.  

### The file input Tag

Because `<input type="file" />` is read-only, it is an uncontrolled component.  

### Handling Multiple Inputs

Set different `name=`, but same Event handler functions.  

### Controlled Input Null Value

If you specify a `value=` you will lock the input unless it is set to `null` or `undefined` again.  

### Alternatives to Controlled Components

See uncontrolled components for an alternative.  

### Fully-Fledged Solutions

[Formik](https://formik.org/) is a full solution: validation, keeping track of fields, ...