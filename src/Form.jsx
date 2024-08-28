function Eventhandler(event){
    event.preventDefault();
    console.log("form submitted");
}

export default function Form(){
return(
<form action="" onSubmit={Eventhandler}>
    <input  placeholder="Type here" />
    <button>submit</button>
</form>
);
}