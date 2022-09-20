import {useForm} from "react-hook-form";

import {createComment} from "../../services";


function Comments() {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const submit = (obj) => {
        createComment(obj).then(data => console.log(data));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name', {required: true})}/>
                {errors.name && <span>This field is required</span>}
                <input type="text" placeholder={'email'} {...register('email', {required: true})}/>
                {errors.email && <span>This field is required</span>}
                <input type="text" placeholder={'body'} {...register('body', {required: true})}/>
                {errors.body && <span>This field is required</span>}
                <button>Save</button>
            </form>
        </div>
    );
}

export default Comments;