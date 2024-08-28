function Onclick() {
    console.log("Hi! Hello");
}

function Handleover() {
    console.log("Hi there!");
}
function Handledbl() {
    console.log("Hello and bye bye!");
}

export default function Btn() {
    return (
        <div>
            <button onClick={Onclick}>Click me</button>
            <p onMouseOver={Handleover}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, quae. Perspiciatis voluptate ea repellat, voluptatum rerum quo consectetur. Quaerat omnis neque natus enim,
                dolorem eligendi ex laboriosam voluptatibus eum veniam?</p>
            <button onDoubleClick={Handledbl}>click me double</button>
        </div>
    );
}