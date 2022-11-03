
export default function MainPart(props) {

        if (props.name === "front") {
            return Front;
        };
        if (props.name === "about") {
            return About;
        };
        if (props.name === "contact") {
            return Contact
        }
}


function Front() {
    return (
      <>
      <h1>Front</h1>
      <p>Hello, it's the Front!</p>
      </>
    )
  }
  
  function About() {
    return (
      <>
      <h1>About</h1>
      <p>Hello, it's the About!</p>
      </>
    )
  }
  
  function Contact() {
    return (
      <>
      <h1>Contact</h1>
      <p>Hello, it's the Contact!</p>
      </>
    )
  }