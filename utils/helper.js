import Swal from 'sweetalert2';


export const formatDate = (date) => {
    if (!date) return '';
    const dateObj = new Date(date);
    return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
};

export const deleteConfirmation = async () => {
    return await Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        padding: '2em',
        customClass: {
            confirmButton: 'bg-red-500 text-white hover:bg-red-600 rounded px-4 py-2',
            cancelButton: 'bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2',
            title: 'font-bold text-lg',
            content: 'text-base',
        },
    });
}







