import { FC } from "react";

type Props = {
  isOpen: boolean;
};

const RatingModal: FC<Props> = (props) => {
  const { isOpen } = props;

  return (
    <div
      className={`fixed z-[61] inset-0 flex items-center justify-center ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl dark:text-gray-800 font-semibold mb-2">
          Rate your Experience
        </h2>
      </div>
    </div>
  );
};

export default RatingModal;
