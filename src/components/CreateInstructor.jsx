const CreateInstructorModal = ({ isOpen, onClose, onConfirm }) => {
    
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">Create Instructor Account</h2>
          <p className="mt-2">Do you want to create an instructor account?</p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateInstructorModal;