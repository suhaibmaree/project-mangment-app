import Input from "../Input/input.jsx";

export default function NewProject() {

    return(
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <Input label={'Title'} ></Input>
                <Input label={'Description'} textarea={true}></Input>
                <Input label={'Du date'}></Input>
            </div>
        </div>
    )
}