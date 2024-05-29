import { IoIosWarning } from "react-icons/io";

const ErrorDisplay = ({ message, retry }) => {
  return (
    <div className="col-span-3 w-full flex flex-col gap-6">
      <div className="bg-red-500 gap-4 rounded-md p-5">
        <IoIosWarning className="text-5xl" />
        <h2>Üzgünüz bir hata oluştur</h2>
        <p>{message}</p>
      </div>

      <button
        onClick={retry}
        className="border text-gray-700 transition hover:bg-gray-100 p-2 rounded-md"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default ErrorDisplay;
