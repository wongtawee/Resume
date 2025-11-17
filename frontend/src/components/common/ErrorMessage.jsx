import { HiExclamationCircle } from 'react-icons/hi';

const ErrorMessage = ({ message = 'Something went wrong. Please try again.' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <HiExclamationCircle className="text-red-500 text-6xl mb-4" />
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
};

export default ErrorMessage;
