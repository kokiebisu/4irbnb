export const Guests = [1, 2, 3, 4, 5, 6, 7, 8];

export const GuestOptions = Guests.map((option, index) => {
  return (
    <option value={option}>
      {option} {index > 0 ? "guests" : "guest"}
    </option>
  );
});
