'use client';
export const CreateAndUpdateExperienceButton = ({ actionFunction, text, updateVersion }) => {
  return (
    <button onClick={() => actionFunction()} className={`flex   rounded-[40px] text-2xl font-semibold  ${updateVersion ? 'text-white, bg-white p-2' : 'border-primary text-primary gap-3 py-5 px-8 border-2'} capitalize`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path d="M4 23.5V28.5H9L23.7467 13.7533L18.7467 8.75333L4 23.5ZM27.6133 9.88666C27.7369 9.76331 27.835 9.61679 27.9019 9.45549C27.9688 9.29419 28.0033 9.12128 28.0033 8.94666C28.0033 8.77204 27.9688 8.59913 27.9019 8.43783C27.835 8.27653 27.7369 8.13001 27.6133 8.00666L24.4933 4.88666C24.37 4.76306 24.2235 4.66499 24.0622 4.59808C23.9009 4.53117 23.728 4.49673 23.5533 4.49673C23.3787 4.49673 23.2058 4.53117 23.0445 4.59808C22.8832 4.66499 22.7367 4.76306 22.6133 4.88666L20.1733 7.32666L25.1733 12.3267L27.6133 9.88666Z" fill="#4169E1" />
      </svg>
      {text}
    </button>
  );
};
