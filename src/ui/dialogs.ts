import Swal from 'sweetalert2';

const showSuccessDialog = (title: string, text: string) => {
    return Swal.fire({
        title,
        text,
        icon: "success",
    })
};

const showErrorDialog = (title: string, text: string) => {
    return Swal.fire({
        title,
        text,
        icon: "error",
    })
};

const dialogs = { success: showSuccessDialog, error: showErrorDialog };
export default dialogs;