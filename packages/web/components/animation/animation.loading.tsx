/**
 * Renders the loading animation
 */
export const LoadingAnimation: React.FC<{
  dark?: boolean;
}> = ({ dark }) => {
  return (
    <div className="w-12 h-6 flex justify-around items-center">
      <span
        className={`block w-4 h-4 rounded-sm circle-animation ${
          dark ? 'bg-black' : 'bg-white'
        }`}
      />
      <span
        style={{
          animationDelay: '0.3s',
        }}
        className={`block w-4 h-4 rounded-sm circle-animation ${
          dark ? 'bg-black' : 'bg-white'
        }`}
      />
      <span
        style={{
          animationDelay: '0.6s',
        }}
        className={`block w-4 h-4 rounded-sm circle-animation ${
          dark ? 'bg-black' : 'bg-white'
        }`}
      />
    </div>
  );
};
