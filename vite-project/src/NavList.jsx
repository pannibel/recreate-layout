export default function NavList() {

    const navs = ["Who we are", "The problems", "Our services", "Testimonials"];
    const mapped = navs.map((nav) => <Nav name={nav} />);

    return <ul>{mapped}</ul>
    
}

function Nav({name}) {

    return <li>{name}</li>
}