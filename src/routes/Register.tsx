import { useState } from "react";
const Register = () => {
    const [first, setFirst] = useState<string>();
    const [firstErr, setFirstErr] = useState<string>();
    const [last, setLast] = useState<string>();
    const [lastErr, setLastErr] = useState<string>();

    const onRegister = () => {


        if (!firstErr && !lastErr) {
            alert(`You entered ${first} ${last}`);
            //axios.post(url,{first,lasr})
        } else {
            alert('fill the form')
        }
    };
    return (
        <form>
            <input
                onChange={(e) => {
                    const first = e.target.value;
                    if (!first) {
                        setFirstErr("name must not be empty");
                        return;
                    }
                    if (first.length < 2 || first.length > 255) {
                        setFirstErr("name must be between 2-255 characters");
                        return;
                    }
                    setFirst(first);
                    setFirstErr(null);
                }}
                type="text"
                name="first"
                placeholder="first"
            />
            {firstErr && <p className="text-red-600">{firstErr}</p>}
            <input
                onChange={(e) => {
                    const lastName = e.target.value;
                    if (!lastName) {
                        setLastErr("lastname must not be empty");
                        return;
                    }
                    if (lastName.length < 2 || lastName.length > 255) {
                        setLastErr("lastname must be between 2-255 characters");
                        return;
                    }
                    setLast(lastName);
                    setLastErr(null);
                }}
                type="text"
                name="first"
                placeholder="last name"
            />
            {firstErr && <p className="text-red-600">{firstErr}</p>}


            <button onClick={onRegister} type="button">
                Register
            </button>
        </form>
    );
};

export default Register;