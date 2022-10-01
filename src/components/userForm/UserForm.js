import {useForm} from "react-hook-form";

import {createUser} from "../../services";

function UserForm({setUsers}) {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();


    const submit = (obj) => {
        createUser(obj).then(({data}) => setUsers(users => [...users, data]));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name', {required: true})}/>
                {errors.name && <span>This field is required</span>}
                <input type="text" placeholder={'username'} {...register('username', {required: true})}/>
                {errors.username && <span>This field is required</span>}
                <input type="text" placeholder={'email'} {...register('email', {required: true})}/>
                {errors.email && <span>This field is required</span>}
                <button>Save</button>
            </form>
        </div>
    );
}

export default UserForm;