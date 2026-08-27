function Message() {
  // JSX: JavaScript XML, a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript files. It is commonly used with React to describe the UI structure.
  const name = ''; // This line declares a constant variable named 'name' and assigns it an empty string. You can replace the empty string with any name you want to display in the greeting message.
  if ( name )
    return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;