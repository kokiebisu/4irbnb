/**
 * Renders the loading animation
 */
export const LoadingAnimation: React.FC<{
  dark?: boolean;
}> = ({ dark }) => {
  return (
    <div className="w-8 h-6 flex justify-around items-center">
      <span
        className={`block w-2 h-2 rounded-full circle-animation ${
          dark ? 'bg-black' : 'bg-white'
        }`}
      />
      <span
        style={{
          animationDelay: '0.3s',
        }}
        className={`block w-2 h-2 rounded-full circle-animation ${
          dark ? 'bg-black' : 'bg-white'
        }`}
      />
      <span
        style={{
          animationDelay: '0.6s',
        }}
        className={`block w-2 h-2 rounded-full circle-animation ${
          dark ? 'bg-black' : 'bg-white'
        }`}
      />
    </div>
  );
};
