import { useState } from 'react';

const useAlert = (option) => {
    const defaultOptions = {
        active: false,
        massage: '',
        type: '',
        autoClose: true,
    };
    const [alert, setAlert] = useState({
        ...defaultOptions,
        ...option,
    });

    const toggleAlert = () => {
        setAlert(!alert.active);
    };

    return {
        alert,
        setAlert,
        toggleAlert,
    };
};

export default useAlert;
